const express = require("express");
const router = express.Router();

// GET route to fetch user data
router.get('/', async (req, res) => {
    
    return res.status(200).send({ message: 'Success !! this is user route' });
});

router.get('/one', async (req, res) => {
    
    return res.status(200).send({ message: 'Success !! this is user route one' });
});

// Export the router for use in other files
module.exports = router;
