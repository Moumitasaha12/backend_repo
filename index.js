const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = require('./db');
app.use('/api/projects', require('./routes/projects'));
app.use('/api/experiences', require('./routes/experiences'));
app.use('/api/contact', require('./routes/contact'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(8000, () => console.log('Server running on port 8000'));
