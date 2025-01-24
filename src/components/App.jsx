import React from 'react';
import { useState } from 'react'
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css['app-container']}>
      <h1>Contact Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
