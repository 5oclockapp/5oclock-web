
import React from 'react';

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, name, label, value, onChange, placeholder, icon, error }) => {
  const hasError = !!error;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute top-3.5 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            block w-full pl-10 pr-3 py-3 
            bg-gray-700/50 border rounded-md
            text-gray-200 placeholder-gray-500 
            transition duration-150 ease-in-out
            focus:outline-none focus:ring-2
            resize-none
            ${hasError 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500'
            }
          `}
        />
      </div>
       {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default TextAreaField;
   