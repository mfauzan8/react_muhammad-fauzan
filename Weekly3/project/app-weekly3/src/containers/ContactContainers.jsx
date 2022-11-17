import React from 'react'
import { useState } from 'react'
import Contact from '../component/Contact'

function ContactContainers() {
    const emptyData = {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    };
    const [form, setForm] = useState(emptyData);

    const handleInputChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
        console.log(value)
        setForm({
            ...form,
            [name]: value,
        });
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        alert("Berhasil Terkirim\n" + form.firstname + " "
            + form.lastname + "\n" + form.email + "\n" + form.message)
    }

    return (
        <Contact handleInputChange={handleInputChange} form={form} handleSubmit={handleSubmit} />
    )
}

export default ContactContainers