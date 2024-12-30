const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/Auth');
const adminRoutes = require('./Routes/Admin');
const movieRoutes = require('./Routes/Movie');
const imageuploadRoutes = require('./Routes/imageUploadRoutes');
const cors = require('cors');
const PORT = 8000;
const passport = require('passport');
require('dotenv').config();
require('./db')
require('./config/google-staregy.js');

app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);

app.use(cookieParser());
app.use(passport.initialize());

// all apis
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);
app.use('/image', imageuploadRoutes);


app.get('/auth/google',
    passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_HOST}/account/login` }),
    (req, res) => {

        // Access user object and tokens from req.user
        const { user, authToken, refreshToken } = req.user;
        res.cookie('authToken', authToken, { httpOnly: true, secure: true, sameSite: 'None' });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None' });


        // Successful authentication, redirect home.
        res.redirect(`${process.env.FRONTEND_HOST}`);
    });


app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

