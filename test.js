const express = require('express');
const app = express();

app.get('/test', (req, res) => res.json({ hello: 'world' }));

app.listen(8000, () => console.log('running on 8000'));
