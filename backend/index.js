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
const allowedOrigins = ['http://localhost:3000','http://localhost:3001'];
require('dotenv').config();
require('./db')

app.use(bodyParser.json());

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

// all apis
app.use('/auth' , authRoutes);
app.use('/admin' , adminRoutes);
app.use('/movie', movieRoutes);
app.use('/image', imageuploadRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

