import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import css from './Contact.module.css';

const Contact = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css['contact-item']}>
      {name}
      <button className={css['delete-button']} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
