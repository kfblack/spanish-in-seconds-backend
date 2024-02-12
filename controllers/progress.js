const express = require('express');
const { Progress } = require('../models');

async function create (req, res, next) {
    try {
        res.json(await Progress.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index (req, res, next) {
    try {
        res.json(await Progress.find({}))
    } catch (err) {
        res.status(400).json(err);
    }
}


async function show (req, res, next) {
    try {
        res.json(await Progress.findById(req.params.id).populate('lesson'));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        let progress = await Progress.findByIdAndUpdate(req.params.id, req.body, {new:true})
        progress.lesson.push(req.params.lessonId);
        progress.save();
        res.json(progress)
    } catch (err) { 
        res.status(400).json(err);
    }  
}


module.exports = {
    create,
    show,
    update, 
    index
}