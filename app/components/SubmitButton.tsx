
import React from 'react';
// import SendIcon from './icons/SendIcon';
import SendIcon from './SendIcon';
import LoadingSpinner from './icons/LoadingSpinner';

interface SubmitButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, children }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed transition-all duration-300"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          Processing...
        </>
      ) : (
        <>
          {children}
          <SendIcon />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
   