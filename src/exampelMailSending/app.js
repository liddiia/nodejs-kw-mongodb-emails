import formData from 'form-data';
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();
//створюємо екземпляр класу
const mailgun = new Mailgun(formData);
//створюємо об'єкт  для відправки
const client = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

//створюємо емейл

//зміннa частина
// const data = {
//     to: ['gotav27663@halbov.com'],
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!',
//   html: '<h1>Testing some Mailgun awesomness!</h1>',
// };

export  const sendEmail = data => {
    const email = {...data, from: 'Liddiia <liddabojko@gmail.com>'};
//відправляємо
return  client.messages.create(process.env.MAILGAN_DOMAIN, email);
  };


  const {JWT_SECRET} = process.env;
  const payload ={
    email:""
  };
  const token = 
