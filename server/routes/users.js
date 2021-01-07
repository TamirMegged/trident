const router = require('express').Router()
const User = require('../db/models/users')
const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
        const result = await User.find({}, { __v: 0 })
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await User.findById(req.params.id)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Register - POST /register
router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, id_number, password, city, street } = req.body
        if (first_name && last_name && email && id_number && password && city && street) {
            const isTaken = (await User.find({ email: email })).length
            if (!isTaken) {
                const salt = genSaltSync();
                const hash = hashSync(password, salt);
                let newUser = new User({ first_name, last_name, email, id_number, password: hash, city, street, role: "customer" })
                newUser.cart.total_price = 0
                const nu = await newUser.save()
                console.log('registered user:', nu)
                res.status(201).json({ error: false, msg: "New user added successfully", hash });
            } else {
                res.status(400).json({ error: true, msg: "Already have an account using this email address" })
            }
        } else {
            res.status(400).json({ error: true, msg: "Missing info, please fill all fields" });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Login - POST /login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            let user = await User.find({ email: email })
            if (user.length) {
                if (compareSync(password, user[0].password)) {
                    const { _id, first_name, last_name, email, city, street, cart, role } = user[0];
                    let access_token = jwt.sign({ _id, first_name, last_name, email, city, street, cart, role }, "kingTamir", {
                        expiresIn: "10m"
                    });
                    res.status(200).json({ error: false, msg: "Logged In", access_token, password: user[0].password });
                } else {
                    res.status(401).json({ error: true, msg: "Email or password invalid" });
                }
            } else {
                res.status(401).json({ error: true, msg: "Email or password invalid" });
            }
        } catch (err) {
            res.sendStatus(500);
        }
    } else {
        res.status(400).json({ error: true, msg: "Missing info" });
    }
})

module.exports = router