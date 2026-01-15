import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

/* ---- Appointment API ---- */
app.post('/api/appointments', (req, res) => {
  const { name, email, doctor, date, time } = req.body;

  if (!name || !email || !doctor || !date || !time) {
    return res.status(400).json({ message: 'All fields required' });
  }

  db.run(
    `INSERT INTO appointments (name, email, doctor, date, time)
     VALUES (?, ?, ?, ?, ?)`,
    [name, email, doctor, date, time],
    () => res.json({ message: 'Appointment booked successfully' })
  );
});

/* ---- Contact API ---- */
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields required' });
  }

  db.run(
    `INSERT INTO contacts (name, email, subject, message)
     VALUES (?, ?, ?, ?)`,
    [name, email, subject, message],
    () => res.json({ message: 'Message received successfully' })
  );
});

app.listen(5000, () =>
  console.log('Backend running on http://localhost:5000')
);
