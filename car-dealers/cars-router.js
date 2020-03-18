const express = require('express');

const db = require('../data/knexConfig.js')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch (() => {
        res.status(500).json({ message: 'Failed to retrieve cars' })
    })
})

module.exports = router;