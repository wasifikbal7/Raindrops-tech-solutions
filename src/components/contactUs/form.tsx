"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import 'boxicons';
import React, { useRef, useState } from 'react'
import { Card, CardContent } from "../ui/card";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    contactNo: Yup.string().matches(/^[0-9]+$/, "Must be only digits").required('Contact number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});



const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const inputStyles = `mb-3 w-full rounded-lg bg-zinc-100 px-3 py-2 placeholder-slate-400 font-mono font-light`;



    return (
        <div className=" md:justify-between md:align-top md:items-center md:flex">
            <motion.div
                className="my-8 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                {loading && <p>Reaching out...</p>}
                <Formik
                    initialValues={{ name: '', contactNo: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setLoading(true);
                        // Send the values to our server using
                        emailjs.send('service_tujsbg2', 'template_dqh70w7', values, 'JI-vnd7F-mnM0EPmn')
                            .then((response) => {
                                console.log('SUCCESS!', response.status, response.text);
                                setLoading(false);
                                alert("Thank you for contacting us! We will reach out to you soon.");
                                setSubmitting(false);
                                resetForm();
                            }, (err) => {
                                console.log('FAILED...', err);
                                setLoading(false);

                            });
                    }}
                >
                    {({ errors, touched, isValid, isSubmitting, dirty }) => (

                        <Card>
                            <CardContent className="mt-6 h-fit">
                                <Form>
                                    <Field
                                        name="name"
                                        placeholder="NAME"
                                        id="name"
                                        type="text"
                                        className={`${errors.name && touched.name ? 'border-red-500' : ''} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                    <Field
                                        placeholder="CONTACT NO."
                                        id="contactNo"
                                        name="contactNo"
                                        type="text"
                                        className={`${errors.contactNo && touched.contactNo ? 'border-red-500' : ''} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="contactNo" component="div" className="text-red-500" />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="EMAIL"
                                        id="email"
                                        className={`${errors.email && touched.email ? 'border-red-500' : ''} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                    <Field
                                        name="message"
                                        placeholder="MESSAGE"
                                        id="message"
                                        className={`${errors.message && touched.message ? 'border-red-500' : ''} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="message" component="div" className="text-red-500" />

                                    <div className="py-6 transition-transform active:scale-90">
                                        <button
                                            type="submit"
                                            disabled={!dirty || !isValid || isSubmitting}
                                            onClick={() => {
                                            }}
                                            className="px-10 py-2 font-semibold text-white transition duration-500 bg-blue-600 rounded-md hover:text-white hover:bg-teal-500"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </Form>
                            </CardContent>
                        </Card>
                    )}
                </Formik>
            </motion.div>
            
        </div>
    );
};

export default ContactForm;


