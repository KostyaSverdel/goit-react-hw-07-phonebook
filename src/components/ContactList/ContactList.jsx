import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContactsAsync,
  deleteContactAsync,
} from '../../redux/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContactAsync(contactId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className={css.phoneList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
