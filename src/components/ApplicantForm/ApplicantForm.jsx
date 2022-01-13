import React, { useState } from 'react';


import s from './Applicant.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [desiredPosition, setDesiredPosition] = useState('');


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
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ name, number, desiredPosition });

    reset();
  };

  const reset = () => {
    setName('');
      setNumber('');
      setDesiredPosition('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <label className={s.label}>
            <p className={s.labelText}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              value={desiredPosition}
              className={s.input}
            />
          </label>
          <button type="submit" className={s.button}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};



export default ContactForm;