const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


const { User } = require('../db');

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const newUser = {
            name,
            email,
            subject,
            message,
        };

        console.log('req -> ' + JSON.stringify(req.body));
        await User.create(newUser);

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'ep3977752@gmail.com',
                pass: 'ekcocqalmsequlhp',
            },
        });

        const mailOptions = {
            from: 'Remitente',
            to: email,
            subject: 'Felicitaciones te has registrado con exito',
            text: `¡Gracias ${name} por registrarte en nustra web!`,
        };

        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Email enviado');
            }
        });

        return res.json({ message: 'new user created!', user: newUser });
    } catch (err) {
        return console.log('este es el error', err)
        
        // res.json({
        //     message: 'user already exists!',
        // });
    }
});



module.exports = router;
