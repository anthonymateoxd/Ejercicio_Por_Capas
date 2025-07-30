import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthPorvider';
import '../style/HomePage.css';

function UserDetailPage() {
  const { id } = useParams();
  const { putUserPage, getUserPage, user } = useAuth();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    contrasena: '',
    email: '',
    date: '',
  });

  useEffect(() => {
    getUserPage(id);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    getUserPage(id);
    // Initialize date when user data loads
    if (user?.fecha_registro) {
      setInputs(prev => ({
        ...prev,
        date: user.fecha_registro.split('T')[0], // Format as YYYY-MM-DD
      }));
    }
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    // Create a clean object with just the data you want to send
    const userData = {
      id_usuario: id, // Using the id from URL params
      nombre: inputs.name,
      contrasena: inputs.contrasena,
      email: inputs.email,
      fecha_registro: inputs.date,
    };
    putUserPage(userData, id); // Call your existing putUserPage with the clean data
    navigate('/');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Detalles del Usuario</h1>

      <div className='bg-white border border-gray-200 rounded-lg p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className='text-lg font-semibold mb-2'>Información Básica</h2>
              <div className='space-y-2'>
                <p>
                  <span className='font-medium'>Nombre:</span>{' '}
                  <input
                    type='text'
                    name='name'
                    value={inputs.name}
                    onChange={handleInputChange}
                    placeholder={user?.nombre}
                  />
                </p>
                <p>
                  <span className='font-medium'>Contrasena:</span>{' '}
                  <input
                    type='text'
                    name='contrasena'
                    value={inputs.contrasena}
                    onChange={handleInputChange}
                    placeholder={user?.contrasena}
                  />
                </p>
                <p>
                  <span className='font-medium'>Email:</span>{' '}
                  <input
                    type='text'
                    name='email'
                    value={inputs.email}
                    onChange={handleInputChange}
                    placeholder={user?.email}
                  />
                </p>
              </div>
              <div>
                <p>
                  <span className='font-medium'>Fecha de Registro:</span>{' '}
                  <input
                    type='date'
                    className='border rounded px-2 py-1 bg-gray-100'
                    value={
                      user?.fecha_registro
                        ? new Date(user.fecha_registro)
                            .toISOString()
                            .split('T')[0]
                        : ''
                    }
                    onChange={e => handleDateChange(e.target.value)} // Assuming you have a handler for this
                  />
                </p>
              </div>
              {/* Buttons */}
              <button
                type='button'
                onClick={handleBack}
                className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'
              >
                Back
              </button>
              <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
