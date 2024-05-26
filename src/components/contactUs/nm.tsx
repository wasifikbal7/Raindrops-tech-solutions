/// src/components/ContactForm.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { google } from 'googleapis';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data...
    try {
      // Send email using EmailJS (replace placeholders)
      await emailjs.sendForm('service_tujsbg2', 'template_dqh70w7', e.currentTarget, 'JI-vnd7F-mnM0EPmn');
      console.log('Email sent successfully!');

      // Send data to Google Sheets (replace placeholders)
      // const auth = new google.auth.GoogleAuth({
      // keyFile: 'path/to/your/credentials.json',
      // scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      // });
      // const sheets = google.sheets({ version: 'v4', auth });
      // const spreadsheetId = 'your_spreadsheet_id';
      // const range = 'Sheet1!A1:E1';
      // const values = [[formData.name, formData.contactNo, formData.email, formData.subject, formData.message]];
      // await sheets.spreadsheets.values.append({
      // spreadsheetId,
      // range,
      // valueInputOption: 'RAW',
      // resource: { values },
      // });
      // console.log('Data appended to Google Sheets!');

      // Reset the form
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:justify-between md:align-top md:items-center md:flex">
      <motion.div
        className="my-8 basis-5/6 md:mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contactNo"
            placeholder="Contact Number"
            value={formData.contactNo}
            onChange={handleChange}
            pattern="[0-9]{10}" // Example: 10-digit phone number pattern
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="py-6 transition-transform active:scale-90">

            <button type="submit">Submit</button>
            </div>
        </form>
      </motion.div>
    </div>
  );
};


export default ContactForm;
