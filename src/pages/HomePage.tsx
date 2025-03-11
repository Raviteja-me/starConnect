import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Music, Headphones, Guitar } from 'lucide-react';
import Logo from '../components/Logo';

const categories = [
  { id: 'Hip-Hop Artist', name: 'Hip-Hop Artist', icon: Mic, color: 'bg-purple-500' },
  { id: 'Singer', name: 'Singer', icon: Music, color: 'bg-blue-500' },
  { id: 'DJ', name: 'DJ', icon: Headphones, color: 'bg-green-500' },
  { id: 'Instrumentalists', name: 'Instrumentalists', icon: Guitar, color: 'bg-pink-500' },
];

const featuredStars = [
  {
    id: 1,
    name: 'John Smith',
    category: 'Musicians',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800',
    price: '$1000/hour'
  },
  {
    id: 2,
    name: 'Emma Davis',
    category: 'Actors',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
    price: '$1500/hour'
  },
  {
    id: 3,
    name: 'Michael Jordan',
    category: 'Athletes',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800',
    price: '$2000/hour'
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <Logo size="lg" animated />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Connect with Your Favorite Stars</h1>
          <p className="text-xl mb-8 animate-fade-in-delay">Book personalized experiences with celebrities, athletes, and influencers</p>
          <div className="flex justify-center gap-4 animate-fade-in-delay-2">
            <button 
              onClick={() => navigate('/book-star')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Book a Star
            </button>
            <button 
              onClick={() => navigate('/register-star')}
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Register as Star
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 cursor-pointer transform hover:scale-105 transition"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stars Section */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Stars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStars.map((star) => (
              <div
                key={star.id}
                onClick={() => navigate(`/star/${star.id}`)}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition"
              >
                <img src={star.image} alt={star.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{star.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{star.category}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{star.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;