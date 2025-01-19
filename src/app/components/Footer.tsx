

import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#043873] body-font my-10 text-[#F7F7EE]">
        {/* Main Footer Section */}
        <div className="container px-6 py-12 mx-auto flex flex-wrap md:flex-nowrap lg:justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <div className="w-full max-w-xs mx-auto md:mx-0">
              <p className="text-[16px] leading-[24px]">
                Whitepace was created for the new ways we live and work. We make a better workspace around the world.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-grow flex flex-wrap justify-between">
            {/* Product Links */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium tracking-widest text-sm mb-4">
                Product
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Overview</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Pricing</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Customer stories</a>
                </li>
              </nav>
            </div>

            {/* Resources Links */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium tracking-widest text-sm mb-4">
                Resources
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Blog</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Guides & Tutorials</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Help Center</a>
                </li>
              </nav>
            </div>

            {/* Company Links */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium tracking-widest text-sm mb-4">
                Company
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">About Us</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Careers</a>
                </li>
                <li>
                  <a className="text-[#F7F7EE] hover:text-gray-400 cursor-pointer">Media Kit</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bg-[#022752] py-4">
          <div className="container mx-auto px-6 flex flex-wrap justify-center sm:justify-between text-center sm:text-left">
            <p className="text-sm">
              © 2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
