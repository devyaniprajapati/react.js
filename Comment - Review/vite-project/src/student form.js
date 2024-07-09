import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    grade: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Grade:</label>
        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            required
          />
          <label>Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            required
          />
          <label>Female</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
            required
          />
          <label>Other</label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
