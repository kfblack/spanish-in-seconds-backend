const express = require('express');
const { LessonActivity } = require('../models');

async function create (req, res, next) {
    try {
        res.json(await LessonActivity.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function alter (req, res, next) {
    try {
        let activity = await LessonActivity.findById(req.params.id);
        activity.activityAnswer.push(req.params.answerId);
        activity.save();
        res.json(activity)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function show (req, res, next) {
    try {
        res.json(await LessonActivity.findById(req.params.id).populate('activityAnswer'));
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
    delete: destroy,
    alter
}