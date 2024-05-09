import React from 'react';

function Contact() {
  const formData = [
    { id: 'remember', type: 'hidden', name: 'remember', defaultValue: 'true', label: 'Remember' },
    { id: 'name', type: 'text', name: 'name', autoComplete: 'name', required: true, label: 'Name', placeholder: 'Name' },
    { id: 'email', type: 'email', name: 'email', autoComplete: 'email', required: true, label: 'Email', placeholder: 'Email' },
    { id: 'message', name: 'message', rows: '4', required: true, label: 'Message', placeholder: 'Message' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div>
          <h2 className="text-center text-3xl font-semibold text-gray-900">Contact Us</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          {formData.map((field, index) => (
            <div key={index}>
              {field.type === 'hidden' ?
                <input type="hidden" name={field.name} defaultValue={field.defaultValue} />
                :
                <div>
                  <label htmlFor={field.id} className="sr-only">{field.label}</label>
                  {field.type === 'textarea' ?
                    <textarea id={field.id} name={field.name} rows={field.rows} required={field.required} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={field.placeholder}></textarea>
                    :
                    <input id={field.id} name={field.name} type={field.type} autoComplete={field.autoComplete} required={field.required} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={field.placeholder} />
                  }
                </div>
              }
            </div>
          ))}
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
