const express = require('express');
const { Lesson } = require('../models');


async function create (req, res, next) {
    try {
        res.json(await Lesson.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index (req, res, next) {
    try {
        res.json(await Lesson.find({}))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function alter (req, res, next) {
    try {
        let lesson = await Lesson.findById(req.params.id);
        lesson.activities.push(req.params.actId);
        lesson.quiz.push(req.params.quizId);
        lesson.save();
        res.json(lesson)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function show (req, res, next) {
    try {
        res.json(await Lesson.findById(req.params.id).populate("activities").populate('quiz'));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        res.json(await Lesson.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (err) { 
        res.status(400).json(err);
    }  
}

async function destroy (req, res, next) {
    try {
        res.json(await Lesson.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    create,
    show,
    update,
    delete: destroy, 
    alter,
    index
}