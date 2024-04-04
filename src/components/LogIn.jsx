import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const LogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  const createAccount = () => {
    if (!userEmail || !userPassword) {
      setServerMessage('Please enter an email and password');
      return;
    }
    if (!userEmail.includes('@')) {
      setServerMessage('Please enter a valid email');
      return;
    }
    axios.post('http://localhost:3000/createAccount', {
      email: userEmail,
      password: userPassword
    })
    .then((response) => {
      setServerMessage(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const logIn = (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      setServerMessage('Please enter an email and password');
      return;
    }
    if (!userEmail.includes('@')) {
      setServerMessage('Please enter a valid email');
      return;
    }
    axios.post('http://localhost:3000/logIn', {
      email: userEmail,
      password: userPassword
    })
    .then((response) => {
      console.log(response)
      setServerMessage(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const grabEmail = (e) => {
    setUserEmail(e.target.value);
  }

  const grabPassword = (e) => {
    setUserPassword(e.target.value);
  }

  return (
    <div className="fixed top-0 right-0">
      <button className="bg-custom-blue text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(true)}>
        Log In
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Log In"
        className="absolute top-0 right-0 w-80 p-4 bg-white rounded shadow-lg"
      >
        <h2 className="text-lg font-bold mb-4 text-custom-blue">Log In</h2>

        <form>
          <label className="block mb-2">
            <input className="w-full px-2 py-1 border rounded" type="email" placeholder="Email" onChange={(e) => grabEmail(e)} required/>
          </label>

          <label className="block mb-4">
            <input className="w-full px-2 py-1 border rounded" type="password" placeholder="Password" onChange={(e) => grabPassword(e)} required/>
          </label>

          <button className="w-full bg-custom-blue text-white px-4 py-2 rounded mb-2" type="submit" onClick={(e) => logIn(e)}>
            Log In
          </button>

          <button className="w-full bg-custom-yellow text-custom-blue px-4 py-2 rounded" type="button" onClick={createAccount}>
            Create Account
          </button>
          <p className="text-custom-blue text-sm mt-2">{serverMessage}</p>
        </form>
      </Modal>
    </div>
  );
}

export default LogIn;