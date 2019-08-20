const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wezhang04@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wezhang04@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Please let me know why you canceled.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}