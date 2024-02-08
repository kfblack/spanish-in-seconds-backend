const express = require('express');
const { QuizQuestion } = require('../models');


async function create (req, res, next) {
    try {
        res.json(await QuizQuestion.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function alter (req, res, next) {
    try {
        let question = await QuizQuestion.findById(req.params.id);
        question.answers.push(req.params.quizAnswerId);
        question.save();
        res.json(question)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function show (req, res, next) {
    try {
        res.json(await QuizQuestion.findById(req.params.id).populate("answers"));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update (req, res, next) {
    try {
        res.json(await QuizQuestion.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (err) { 
        res.status(400).json(err);
    }  
}

async function destroy (req, res, next) {
    try {
        res.json(await QuizQuestion.findByIdAndDelete(req.params.id))
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