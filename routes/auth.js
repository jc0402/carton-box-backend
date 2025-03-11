const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Dummy authentication logic
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ token: 'dummy-token', role: 'admin' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
