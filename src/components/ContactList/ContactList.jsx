import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  
  const contacts = useSelector(state => state.contacts?.items || []);
  const filter = useSelector(state => state.filters?.name?.toLowerCase() || '');

  // Мемоизация фильтрованных контактов для предотвращения лишних вычислений
  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter) // Используем optional chaining для безопасности
    );
  }, [contacts, filter]);

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, phone }) =>
          id && name && phone ? (
            <Contact key={id} id={id} name={name} phone={phone} />
          ) : null
        )
      ) : (
        <li>No contacts to display</li>
      )}
    </ul>
  );
};

export default ContactList;
