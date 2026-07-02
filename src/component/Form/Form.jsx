import React, { useState } from 'react';
import "./form.scss";
import toast, { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { profile } from '../../data';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const subject = encodeURIComponent(title || `Contact portfolio - ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

        toast.success("Votre application e-mail va s’ouvrir");
        setTimeout(() => setLoading(false), 600);
    };

    return (
        <div className='form-container' data-aos="zoom-in-up">
            <Toaster />
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <div className="form-item">
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name" required />
                        <span>Nom</span>
                    </div>
                    <div className="form-item">
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" required />
                        <span>Email</span>
                    </div>
                </div>
                <div className="item">
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} name="title" required />
                    <span>Sujet</span>
                </div>
                <div className="item">
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message" required></textarea>
                    <span>Message</span>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? (
                        <Oval
                            height={20}
                            width={20}
                            color="#fff"
                            ariaLabel="loading"
                        />
                    ) : (
                        "Envoyer"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Form;
