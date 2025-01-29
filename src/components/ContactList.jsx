// ContactList component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactRow from './ContactRow';

function ContactList({ setSelectedContact })// Destructuring setSelectedContact from props
{
    const [contacts, setContacts] = useState([]);// Initializing contacts state with an empty array

    useEffect(() => {// Fetching contacts from the API
        axios('https://jsonplaceholder.typicode.com/users')
            .then((data) => {
                setContacts(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (// Rendering the contact list
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (// Mapping over the contacts array
                    <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact} />
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;