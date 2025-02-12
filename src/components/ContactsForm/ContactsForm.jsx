import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already exists`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, phone })); // Добавление телефона
    setName('');
    setPhone(''); // Очистка поля ввода
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <input
        type="tel" // Поле для ввода телефона
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Enter phone number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
