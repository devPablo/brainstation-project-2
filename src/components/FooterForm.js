import { useState } from 'react';

const FooterForm = () => {
  const [email, setEmail] = useState('');

  const localSubmitHandler = e => {
    e.preventDefault();
    const data = { email: email.toLowerCase() };
    fetch('http://localhost:5000/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
  };

  return (
    <form className='footer-form' onSubmit={localSubmitHandler}>
      <div className='footer-form__group'>
        <input
          type='email'
          className='footer-form__input'
          placeholder='email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='footer-form__group'>
        <button type='submit' className='footer-form__submit'>
          sign me up
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
