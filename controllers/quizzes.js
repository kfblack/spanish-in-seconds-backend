const express = require('express');
const { Quiz } = require('../models');

async function create (req, res, next) {
    try {
        res.json(await Quiz.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index (req, res, next) {
    try {
        res.json(await Quiz.find({}))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function show (req, res, next) {
    try {
        res.json(await Quiz.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        res.json(await Quiz.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (err) { 
        res.status(400).json(err);
    }  
}

async function destroy (req, res, next) {
    try {
        res.json(await Quiz.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    create,
    show,
    update,
    delete: destroy,
    index
}
