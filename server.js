const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const validKey = 'mySecretKey';

function checkKey(key) {
    return key === validKey;
}

app.use(bodyParser.json());

app.post('/get-address', (req, res) => {
    const { key } = req.body;

    if (checkKey(key)) {
        res.json({ address: 'https://vitaliymv.github.io/notebook/' });
    } else {
        res.status(403).json({ error: 'Invalid key' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});