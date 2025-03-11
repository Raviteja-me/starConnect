import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, PartyPopper } from 'lucide-react';

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegistration = location.search.includes('type=registration');

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">
            {isRegistration ? 'Registration Successful!' : 'Booking Confirmed!'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isRegistration 
              ? 'Thank you for registering! Your profile is under review.'
              : 'Get ready for an amazing experience!'}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          {isRegistration ? (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Our team will review your application within 24-48 hours.
                You'll receive an email once your profile is approved.
              </p>
              <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <PartyPopper className="w-5 h-5 mr-2" />
                <span>Welcome to StarConnect!</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                Check your email for booking details and instructions.
              </p>
              <div className="py-4">
                <div className="w-full h-12">
                  {/* Add confetti animation here */}
                  🎉 🌟 ✨ 🎊
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;