import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side: Name and Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2 text-gray-200">Souvik Kumar Baguli</h3>
          <p className="text-sm text-gray-400">© 2025 All Rights Reserved</p>
        </div>

        {/* Middle: Links (LinkedIn and github) */}
        <div className="flex gap-8 justify-center">
          <a 
            href="https://www.linkedin.com/in/souvik-kumar-baguli-81a9a02a1/" 
            className="text-lg text-blue-500 hover:text-blue-400 transition-colors duration-300 font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/souvikkumar59" 
            className="text-lg text-blue-500 hover:text-blue-400 transition-colors duration-300 font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        
        {/* Right side: Back to top */}
        
      </div>
    </footer>
  );
};

export default Footer;
