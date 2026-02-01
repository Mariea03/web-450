var express = require('express');
var router = express.Router();
const { composerService } = require('../model');
const createError = require('http-errors');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const composers = await composerService.getAllComposers();
    res.json(composers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// Get Composer by ID
router.get('/:id', async function(req, res, next) {
  try {
    const composer = await composerService.getComposerById(req.params.id);
    res.json(composer);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    const id = await composerService.modifyComposer(req.params.id,req.body);
    res.json({ id });
  } catch (err) {
    console.error(err);
    if (err.message === 'Composer not found in the database') {
      return next(createError(404, err.message));
    }
    next(err);
  }
});

module.exports = router;
