import { useState } from 'react';
import { useAuth } from '../context/AuthPorvider';
import { useNavigate } from 'react-router-dom';

export default function AddPage() {
  const { addUserPage, user } = useAuth();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    nombre: '',
    contrasena: '',
    email: '',
    fecha_registro: new Date().toISOString().split('T')[0], // Changed from 'date' to 'fecha_registro'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addUserPage(inputs);
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-6'>Register</h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-md'
      >
        <div className='mb-4'>
          <label
            htmlFor='nombre'
            className='block mb-2 font-medium'
          >
            {' '}
            {/* Changed id to 'nombre' */}
            Name:
          </label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={inputs.nombre}
            onChange={handleChange}
            placeholder='Enter your name'
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='contrasena'
            className='block mb-2 font-medium'
          >
            Password:
          </label>
          <input
            type='password'
            id='contrasena'
            name='contrasena'
            value={inputs.contrasena}
            onChange={handleChange}
            placeholder='Enter your password'
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block mb-2 font-medium'
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={inputs.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full px-3 py-2 border rounded'
            required
          />
          <p>
            <span className='font-medium'>Fecha de Registro:</span>{' '}
            <input
              type='date'
              className='border rounded px-2 py-1 bg-gray-100'
              value={
                user?.fecha_registro
                  ? new Date(user.fecha_registro).toISOString().split('T')[0]
                  : ''
              }
              onChange={e => handleDateChange(e.target.value)} // Assuming you have a handler for this
            />
          </p>
        </div>
        <div className='mb-4'></div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Register
        </button>
      </form>
    </div>
  );
}
