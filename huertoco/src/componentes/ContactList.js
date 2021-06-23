import React from 'react'

export default function ContactList({contacts}) {
    return (
        <ul>
            {contacts.map(contact => (
            <li key={contact.name+contact.lastname+contact.address}>
                {Object.values(contact).toString()}
            </li>
            ))}
        </ul>
    )
}
