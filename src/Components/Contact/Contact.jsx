import './contact.css';
import { BsPersonFill, BsQuestionCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiSolidMessageAltDetail } from 'react-icons/bi';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [submitMessage, setSubmitMessage] = useState('');
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8t98jsi', 'template_rl5v0wf', form.current, '8n-mlNrupz3rdpU0s')
            .then((result) => {
                setSubmitMessage("Your message has been submitted correctly! I'll be in touch with you shortly.")

            }, (error) => {
                console.log(error)
                setSubmitMessage("Your message couldn't be submitted. Try again!")
            });
        
        form.current.reset();
    };

    return (
        <section id='contact'>
            <h2 className='text-center'>
                Contact Me
            </h2>
            {submitMessage &&
                <p className='text-center mx-3 mx-md-auto my-5'>{ submitMessage }</p>}
            {!submitMessage &&
                <form className='form mx-auto my-5' ref={form} onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <label htmlFor='fullName' className='form-label d-flex align-items-center column-gap-2'>
                            <BsPersonFill className='fs-5' />
                            Full Name
                        </label>
                        <input type='text' className='form-control' id='fullName' name='name' placeholder='Jane Doe' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='form-label d-flex align-items-center column-gap-2'>
                            <MdEmail className='fs-5' />
                            Email address
                        </label>
                        <input type='email' className='form-control' id='email' placeholder='janedoe@gmail.com' name='email' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='subject' className='form-label d-flex align-items-center column-gap-2'>
                            <BsQuestionCircleFill className='fs-5' />
                            What would you like to ask?
                        </label>
                        <select className='form-select' id='subject' name='subject' required>
                            <option value="" selected disabled hidden>- Select subject -</option>
                            <option value="I'd like to ask a question">I'd like to ask a question</option>
                            <option value="I'd like to start a project">I'd like to start a project</option>
                            <option value="I'd like to make a proposal">I'd like to make a proposal</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message" className='form-label d-flex align-items-center column-gap-2'>
                            <BiSolidMessageAltDetail className='fs-5' />
                            Your message
                        </label>
                        <textarea name="message" placeholder="I'd like to chat about..." className="form-control" id="message" required></textarea>
                    </div>
                    <input type='submit' className='btn primary-btn w-100 mt-3' value='Send'></input>
                </form>
            }
        </section>
    )
}