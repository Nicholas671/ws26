//SelectedContact component
import React from 'react'

function SelectedContact({ contact, onReturn }) {// Destructuring contact and onReturn from props
    return (
        <div>
            {contact ? (// If contact is not null
                <div>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>{contact.phone}</div>
                    <div>{contact.address.stree}</div>
                    <div>{contact.address.suite}</div>
                    <div>{contact.address.city}</div>
                    <div>{contact.address.zipcode}</div>
                    <div>{contact.company.name}</div>
                    <div>{contact.company.catchPhrase}</div>
                    <div>{contact.company.bs}</div>
                    <button onClick={onReturn}>Return</button>
                </div>)
                : (// If contact is null
                    <div>Contact Not Found</div>
                )}
        </div>
    )
}

export default SelectedContact