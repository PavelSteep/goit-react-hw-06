import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.map(({ id, name }) => (
        <Contact key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
