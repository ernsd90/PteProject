const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { Op } = require('sequelize');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const updatedUser = await user.update(req.body);
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        await user.destroy();
        res.send({ message: "User deleted" });
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.registerUser = async (req, res) => {
    const { first_name, last_name, username, user_email, user_password } = req.body;
    

    try {

        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ username: username }, { user_email: user_email }]
            }
        });

        if (existingUser) {
            const isEmailConflict = existingUser.user_email === user_email;
            const isUsernameConflict = existingUser.username === username;
            let message = 'An account with the same ';
            message += isEmailConflict ? 'email' : '';
            message += isEmailConflict && isUsernameConflict ? ' and ' : '';
            message += isUsernameConflict ? 'username' : '';
            message += ' already exists.';
            return res.status(409).json({ message });
        }
        const hashedPassword = await bcrypt.hash(user_password.trim(), 10);

        const user = await User.create({
            first_name,
            last_name,
            username,
            user_email,
            user_password: hashedPassword
        });
        res.status(201).send({ status: 'User registered', user });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.loginUser = async (req, res) => {

    try {
        const { user_email, user_password } = req.body;
        if (!user_email || !user_password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { username: user_email }, 
                    { user_email: user_email }
                ]
            }
        });
        if (!user) {
            return res.status(400).json({ message: 'Email Or UserName Incorrect' });
        }

        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);

      
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign(
            { id: user.id, user_email: user.user_email },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );

        const role = "Student";
        res.send({ message: 'Login successful', token, role });


    } catch (error) {
        res.status(500).json({ message: 'Error Login user', error: error.message });
    }
};
