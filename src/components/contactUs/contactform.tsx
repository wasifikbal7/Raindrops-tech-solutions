"use client"
import { motion } from "framer-motion";
import 'boxicons';
import React, { useState } from 'react'
import { Card, CardContent } from "../ui/card";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Toast from "./toast";

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    contactNo: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, "Enter valid Contact Number").required('Contact number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});


 
const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const inputStyles = `mb-3 w-full rounded-lg bg-zinc-100 px-3 py-2 placeholder-slate-400 font-mono font-light`;

    const [openToast, setOpenToast] = useState(false);

    const toggleToast = () =>  setOpenToast(!openToast);

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
                {loading && <p className="my-2 font-semibold text-emerald-600 font-lg">Submitting...</p>}
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
                                toggleToast();
                                // alert("Thank you for contacting us! We will reach out to you soon.");
                                setSubmitting(false);
                                resetForm();
                            }, (err) => {
                                console.log('FAILED...', err);
                                setLoading(false);

                            });
                    }}
                >
                    {({ errors, touched, isValid, isSubmitting, dirty }) => (
                        <>
                        <Card className="md:w-[40vw]">
                            <CardContent className="mt-6 h-fit">
                                <Form className="py-5">
                                    <Field
                                        name="name"
                                        placeholder="NAME"
                                        id="name"
                                        type="text"
                                        autocomplete="Name"
                                        className={`${errors.name && touched.name ? 'border-red-500' : 'my-2'} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                    <Field
                                        placeholder="CONTACT NO."
                                        id="contactNo"
                                        name="contactNo"
                                        type="text"
                                        autocomplete="tel"
                                        className={`${errors.contactNo && touched.contactNo ? 'border-red-500' : 'my-2'} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="contactNo" component="div" className="text-red-500" />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="EMAIL"
                                        id="email"
                                        autoComplete="Email"
                                        className={`${errors.email && touched.email ? 'border-red-500' : 'my-2'} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                    <Field
                                        name="message"
                                        placeholder="MESSAGE"
                                        id="message"
                                        autoComplete="off"
                                        className={`${errors.message && touched.message ? 'border-red-500' : 'my-2'} ${inputStyles}`}
                                    />
                                    <ErrorMessage name="message" component="div" className="text-red-500" />

                                    <div className="py-6 transition-transform active:scale-90">
                                        <button
                                            type="submit"
                                            disabled={!dirty || !isValid || isSubmitting}
                                            className="px-10 py-2 font-semibold text-white transition duration-500 bg-blue-600  hover:text-white hover:bg-teal-500 rounded-[65px]"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </Form>
                            </CardContent>
                        </Card>
                        <div className="z-[99]">
                            <Toast isOpen={openToast} onClose={toggleToast} />
                        </div>
                        </>
                    )}
                </Formik>
            </motion.div>
            
        </div>
    );
};

export default ContactForm;


