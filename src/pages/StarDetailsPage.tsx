import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Star, Award, MessageCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const StarDetailsPage = () => {
  const { starId } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00');

  // Mock data - In a real app, this would come from an API
  const star = {
    id: starId,
    name: 'John Smith',
    category: 'Musicians',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800',
    price: 1000,
    rating: 4.8,
    reviews: 156,
    description: 'Award-winning musician with over 10 years of experience. Available for private performances, meet & greets, and virtual events.',
    availability: ['10:00', '12:00', '14:00', '16:00', '18:00'],
  };

  const handleBooking = () => {
    // Handle booking logic here
    window.location.href = '/booking-confirmation';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Star Info Section */}
        <div>
          <img src={star.image} alt={star.name} className="w-full h-96 object-cover rounded-xl mb-6" />
          <h1 className="text-3xl font-bold mb-4">{star.name}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              {star.category}
            </span>
            <div className="ml-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="ml-1">{star.rating}</span>
              <span className="text-gray-400 ml-1">({star.reviews} reviews)</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{star.description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Award className="w-5 h-5 text-indigo-600 mr-2" />
              <span>Professional Experience: 10+ years</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-indigo-600 mr-2" />
              <span>Languages: English, Spanish</span>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Book an Experience</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  minDate={new Date()}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {star.availability.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Base Price</span>
                <span>${star.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Service Fee</span>
                <span>${Math.round(star.price * 0.1)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${Math.round(star.price * 1.1)}</span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarDetailsPage;