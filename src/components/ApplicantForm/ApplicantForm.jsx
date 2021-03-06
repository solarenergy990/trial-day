import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';

import s from './Applicant.module.css';

import StatusContext from '../../context/context';

const ContactForm = ({
  onSubmit,
  setActive,
  // setApplicantStatus,
  // currentApplicantStatus,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');
  const { status, setStatus } = useContext(StatusContext);
  // const [status, setStatus] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;

    if (evt.currentTarget.name === 'name') {
      setName(value);
    }
    if (evt.currentTarget.name === 'number') {
      setNumber(value);
    }
    if (evt.currentTarget.name === 'desiredPosition') {
      setDesiredPosition(value);
    }
    setStatus('application');
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(status);

    onSubmit({ name, number, desiredPosition, status });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setDesiredPosition('');
    setActive(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className={s.formContainer}>
          <label className={s.label}>
            <p className={s.labelText}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name can contain letters, spaces,  dashes, apostrophes e.g. Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
              required
              onChange={handleChange}
              value={name}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <p className={s.labelText}>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Telephone number can contain numbers, dashes, spaces, round brackets and can begin with +"
              required
              onChange={handleChange}
              value={number}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <p className={s.labelText}>Desired position</p>
            <input
              type="text"
              name="desiredPosition"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Text can contain letters, spaces,  dashes, apostrophes e.g. Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
              required
              onChange={handleChange}
              value={desiredPosition}
              className={s.input}
            />
          </label>
          <Button type="submit" variant="btn btn-success">
            Add Candidate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
