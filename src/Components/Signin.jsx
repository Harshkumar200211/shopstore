import React, { useState } from 'react';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const infos =()=>{
    alert('Signin succesfully')
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., send the formData to your backend
    console.log('Form submitted:', formData);
  };

  const formFields = [
    { id: 'remember', type: 'hidden', name: 'remember', defaultValue: 'true', label: 'Remember' },
    { id: 'email-address', type: 'email', name: 'email', autoComplete: 'email', required: true, label: 'Email address', placeholder: 'Email address' },
    { id: 'password', type: 'password', name: 'password', autoComplete: 'current-password', required: true, label: 'Password', placeholder: 'Password' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div>
          <h2 className="text-center text-3xl font-semibold text-gray-900">Sign In</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div key={index}>
              {field.type === 'hidden' ? (
                <input type="hidden" name={field.name} defaultValue={field.defaultValue} />
              ) : (
                <div>
                  <label htmlFor={field.id} className="sr-only">{field.label}</label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    value={formData[field.name]}
                  />
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit" onClick={infos}  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
