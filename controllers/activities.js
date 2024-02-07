const express = require('express');
const { LessonActivity } = require('../models');

async function create (req, res, next) {
    try {
        res.json(await LessonActivity.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function show (req, res, next) {
    try {
        res.json(await LessonActivity.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        res.json(await LessonActivity.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (err) { 
        res.status(400).json(err);
    }  
}

async function destroy (req, res, next) {
    try {
        res.json(await LessonActivity.findByIdAndDelete(req.params.id))
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