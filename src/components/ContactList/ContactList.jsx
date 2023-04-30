import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsAsync } from '../../redux/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))
      )}
    </ul>
  );
}

export default ContactList;
