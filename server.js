const express = require("express");

const fs = require('fs');

const nodemailer = require('nodemailer');
const  bodyParser = require('body-parser');
/** 
const port= 80; 
**/
/**
const hostname= '127.0.0.1';
const port= 5500;
**/
const path = require('path');


const app = express();

app.get('/register.html',(req,res) => {

 res.sendFile(__dirname + '/register.html')
})
app.get('/',(req,res) => {

    res.sendFile(__dirname + '/register.html')
   })

/**app.use(express.static('./')); 
**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
sending();


function sending(){

   

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
        console.log(err+"                    "+mail.to)
    }
    else {
        console.log("Email sent: "+info.response)
    }
})
}

app.post('/register.html', (req,res)=> {
    mail= {
        to:req.body.to_address,
        subject:"Sheets_Wrap - project details",
        body:req.body.NAME + "    ------------/////////////------------     "+ req.body.phone + "    ------------/////////////------------     " + req.body.email_body + "    ------------/////////////------------     " + req.body.code
    }
    sendEmail(mail)
    res.redirect('/register.html')
})
app.post('/', (req,res)=> {
    mail= {
        to:req.body.to_address,
        subject:"Sheets_Wrap - project details",
        body:req.body.NAME + "    ------------/////////////------------     "+ req.body.phone + "    ------------/////////////------------     " + req.body.email_body + "    ------------/////////////------------     " + req.body.code
    }
    sendEmail(mail)
    res.redirect('/register.html')
})

/**
app.listen(port, ()=> {
    console.log('SERVER IS RUNNIG AT PORT 8000')
    console.log(`Server runnung at http://localhost:${port}/register.html`);
})
**/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


}
