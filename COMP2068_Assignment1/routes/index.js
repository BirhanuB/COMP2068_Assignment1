'use strict';
var express = require('express');
var router = express.Router();

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

module.exports = router;
