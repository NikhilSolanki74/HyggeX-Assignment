import React, { useState } from 'react';

const MidNav = () => {
    const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <main>
      <nav className="flex justify-center items-center space-x-10 mt-10 mr-20">
        <div
          className={`cursor-pointer ${
            activeTab === 'home' ? 'text-blue-500 border-b-2 border-blue-500' : ''
          }`}
          onClick={() => handleClick('home')}
        >
          Study
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'about' ? 'text-blue-500 border-b-2 border-blue-500' : ''
          }`}
          onClick={() => handleClick('about')}
        >
          Quiz
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'contact' ? 'text-blue-500 border-b-2 border-blue-500' : ''
          }`}
          onClick={() => handleClick('contact')}
        >
          Test
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'study' ? 'text-blue-500 border-b-2 border-blue-500' : ''
          }`}
          onClick={() => handleClick('study')}
        >
          Game
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'games' ? 'text-blue-500 border-b-2 border-blue-500' : ''
          }`}
          onClick={() => handleClick('games')}
        >
          Others
        </div>
      </nav>
    </main>
  );
};



export default MidNav;