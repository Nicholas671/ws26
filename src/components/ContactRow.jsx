// ContactRow component
import React from 'react';

function ContactRow({ setSelectedContact, contact })
// Destructuring setSelectedContact and contact from props
{
    return (
        <tr onClick={() => // Setting the selected contact
        { setSelectedContact(contact) }}
        // Setting the selected contact
        >

            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );// Rendering the contact row
}

export default ContactRow;