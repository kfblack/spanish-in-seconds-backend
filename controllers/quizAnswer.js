const express = require('express');
const { QuizAnswer } = require('../models');

async function create (req, res, next) {
    try {
        res.json(await QuizAnswer.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function show (req, res, next) {
    try {
        res.json(await QuizAnswer.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        res.json(await QuizAnswer.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (err) { 
        res.status(400).json(err);
    }  
}

async function destroy (req, res, next) {
    try {
        res.json(await QuizAnswer.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    create,
    show,
    update,
    delete: destroy
}