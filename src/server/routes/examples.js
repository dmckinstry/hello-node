const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/all', async (req, res, next) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.status(200).send(data);
});

module.exports = router;
