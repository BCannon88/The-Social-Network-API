const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

const { route } = require('./user-route');
// /api/users
router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(addThought);

// /api/user/:id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

router
    .route('./:userId/:thoughtId')
    .delete(removeThought);

///api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;