import React, { useState } from 'react';

  function RegisterForm({ onSubmit }) {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ image, message, startDate, endDate, startTime, endTime });
    };

    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Image: </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <label>Message: </label>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div>
            <label>Start Date: </label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label>Start Time: </label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div>
            <label>End Date: </label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div>
            <label>End Time: </label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  export default RegisterForm;
