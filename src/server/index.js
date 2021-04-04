'use strict';

const express = require('express');

const router = new express.Router();

// routes
router.use('/example', require('./routes/examples'));

router.use((req, res) => {
    res.status(404).end();
});

router.use((err, req, res, next) => {
    console.log(err)
});

module.exports = router;
