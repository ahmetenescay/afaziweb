// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointment');
const articleRoutes = require('./routes/article');
const commentRoutes = require('./routes/comment');
const contactRoutes = require('./routes/contact');
const researchRoutes = require('./routes/research');

const initializeTables = require('./models');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/research', researchRoutes);

initializeTables();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
