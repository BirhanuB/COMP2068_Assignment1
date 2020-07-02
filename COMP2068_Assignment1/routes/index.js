'use strict';
var express = require('express');
var router = express.Router();
var feedbacksModel = require('../models/feedbacks');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/about', function (req, res) {
    res.render('about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

/* POST contact me page */
router.post('/contact', function (req, res) {
    const feedback = new feedbacksModel({ name: req.body.name, email: req.body.email, comment: req.body.comment });
    //Insert the feedback into DB and redirect to home page
    feedback.save(function (err) {
        console.log(err);
        res.redirect('/');
    });
});

module.exports = router;
