const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateOneUser,
    deleteUser,
    addFriend,
    deleteOneFriend
} = require('../../controllers/user-controller');

// router
//     .route('/')
//     .get()
//     .post();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateOneUser)
    .delete(deleteUser);
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteOneFriend);

module.exports = router;