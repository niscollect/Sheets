const express = require("express");

const fs = require('fs');

const nodemailer = require('nodemailer');
const  bodyParser = require('body-parser');


const path = require('path');


const app = express();

app.get('/',(req,res) => {

 res.sendFile(path.join(__dirname + '/register.html'))
})

/**app.use(express.static('./')); 
**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'collectnis@gmail.com',
        pass:'free_fire123'        
    }
});

function sendEmail(mail)
{
 var mailOptions= {
     from: 'collectnis@gmail.com',
     to:mail.to,
     subject: mail.subject,
     html: mail.body
 }

transporter.sendMail(mailOptions, function(err, info) {
    if(err){
        console.log(err+"                                                                                                        "+mail.to)
    }
    else {
        console.log("Email sent: "+info.response)
    }
})
}

app.post('/send_email_form', (req,res)=> {
    mail= {
        to:req.body.to_address,
        subject:"Web_LooX - project details",
        body:req.body.NAME + "    ------------/////////////------------     "+ req.body.phone + "    ------------/////////////------------     " + req.body.email_body + "    ------------/////////////------------     " + req.body.code
    }
    sendEmail(mail)
    res.redirect('/')
})


app.listen(8000, ()=> {
    console.log('SERVER IS RUNNIG AT PORT 8000')
})