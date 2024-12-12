import React, { useState } from 'react';
  import RegisterForm from './RegisterForm';
  import DisplayContent from './DisplayContent';
  import Navbar from './Navbar';

  function App() {
    const [page, setPage] = useState('register');
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
      setFormData(data);
      setPage('display');
    };

    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    return (
      <div className="app">
        <Navbar onPageChange={handlePageChange} />
        {page === 'register' && <RegisterForm onSubmit={handleFormSubmit} />}
        {page === 'display' && formData && <DisplayContent formData={formData} />}
      </div>
    );
  }

  export default App;
