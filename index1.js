const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail =
            `
            <h3>Contacts Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
            </ul>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
            `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'jonathan.omj86@gmail.com',
                pass: 'Jomj.1986'
            },
            // tls: {
            //     rejectUnauthorized: false
            // }
        })
        
        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'jonathan.omj86@gmail.com',
            replyTo: 'test@testaccount.com',
            subjet: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err){
                return console.log(err)
            }

            console.log('Messager Sent: $s', info.message)
            console.log('Message URL: $s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT), () => {
    console.log(`Server listening on port ${PORT}`)
}