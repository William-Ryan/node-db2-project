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

router.get('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id })
    .first()
    .then(car => {
        if(car){
            res.status(200).json({ data: car })
        } else {
            res.status(404).json({ message: "Car not found" })
        }
    })
    .catch(() => {
        res.status(500).json({ message: "Error retrieving the car" })
    })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body, 'id')
    .then(ids => {
        res.status(201).json({ results: ids })
    })
    .catch(() => {
        res.status(500).json({ message: 'Error adding this Car' })
    })
})

router.put('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
        if (count > 0){
            res.status(200).json({ count })
        } else {
            res.status(404).json({ message: "Could not find Account" })
        }
    })
    .catch(() => {
        res.status(500).json({ message: "Error updating Account" })
    })
})

router.delete('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if (count > 0){
            res.status(200).json({ message: 'Account deleted successfully' })
        } else {
            res.status(404).json({ message: "Account not found" })
        }
    })
    .catch(() => {
        res.status(500).json({ message: "Error deleting Account" })
    })
})

module.exports = router;