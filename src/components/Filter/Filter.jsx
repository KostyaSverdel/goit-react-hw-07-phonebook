import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filter;
