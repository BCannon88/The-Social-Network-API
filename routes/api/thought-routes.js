const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateOneThought,
    deleteThought,
    addReaction,
    deleteOneReaction
} = require('../../controllers/thought-controller');

// const { route } = require('./user-routes');
router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateOneThought)

router
    .route('/:thoughtId/users/:userId')
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteOneReaction);


module.exports = router;