const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const validator = require('validator');
const connectDB = require('./config/db');
const userModel = require('./model/userModel');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB(process.env.dbURL);

app.post('/', async (req, res) => {
  const { name, phoneNum, companyName, email, reason, additionalMsg} = req.body;

  try {
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Name is required' });
    }

    if (!phoneNum || phoneNum.trim() === '') {
      return res.status(400).json({ message: 'Phone number is required' });
    }
    if (!validator.isMobilePhone(phoneNum, 'en-IN')) {
      return res.status(400).json({ message: 'Enter a valid phone number' });
    }

    if (!email || email.trim() === '') {
      return res.status(400).json({ message: 'Email is required' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Enter a valid email' });
    }

    if (!reason || reason.trim() === '') {
      return res.status(400).json({ message: 'Reason is required' });
    }


    const user = await userModel.create({ name, phoneNum, companyName, email, reason, additionalMsg });

    return res.status(201).json(user);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server connected');
});
