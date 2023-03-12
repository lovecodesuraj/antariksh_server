import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const myGmail=process.env.myGmail;
const myGmailPassword=process.env.myGmailPassword;

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: myGmail,
        pass: myGmailPassword,
    }
});




const sendMail = async (body) => {
    const {name,email,phone,purpose,branch,year}=body;
    try {

        var html=`
        <h2>Antariksh</h2>
        <p>name:${name}</p>
        <p>email:${email}</p>
        <p>phone:${phone}</p>
        <p>branch:${branch}</p>
        <p>year:${year}</p>
        <p>Purpose:${purpose}</p>
        `;
        var mailOptions = {
            from: 'Antariksh',
            to: "suraj_12017021@nitkkr.ac.in",
            subject: `Request to join Antariksh`,
            text: "",
            html: html,
            attachments: []
        };
        const response=await transporter.sendMail(mailOptions);
        return {response};       
    } catch (error) {
        return {error};
    }
};


const sendContactMail = async (body) => {
    const {name,email,phone,query}=body;
    try {

        var html=`
        <h2>Antariksh</h2>
        <p>name:${name}</p>
        <p>email:${email}</p>
        <p>phone:${phone}</p>
        <p>Query:${query}</p>
        
        `;
        var mailOptions = {
            from: 'Antariksh',
            to: "suraj_12017021@nitkkr.ac.in",
            subject: `Antariskh query `,
            text: "",
            html: html,
            attachments: []
        };
        const response=await transporter.sendMail(mailOptions);
        return {response};       
    } catch (error) {
        return {error};
    }
};


export {sendMail,sendContactMail};