const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const User = require('../Models/UserSchema');
const jwt = require('jsonwebtoken');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    async (accessToken, refreshToken, profile, done) => {
        // console.log("Profile", profile);
        try {
            // Check if user already exists in the database
            let user = await User.findOne({ email: profile._json.email });
            if (!user) {
                const lastSixDigitsID = profile.id.substring(profile.id.length - 6);
                const lastTwoDigitsName = profile._json.name.substring(profile._json.name.length - 2);
                const newPass = lastTwoDigitsName + lastSixDigitsID
                // Generate salt and hash password
                const salt = await bcrypt.genSalt(Number(process.env.SALT));
                const hashedPassword = await bcrypt.hash(newPass, salt);
                user = await User.create({
                    name: profile._json.name,
                    email: profile._json.email,
                    password: hashedPassword,
                    city: "New York",
                })
            }
            // Generate JWT tokens
            //const { accessToken, refreshToken, accessTokenExp, refreshTokenExp } = await generateTokens(user);
            const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '720m' });
            const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '720m' });
            return done(null, { user, authToken, refreshToken });

        } catch (error) {
            return done(error);
        }
    }
));