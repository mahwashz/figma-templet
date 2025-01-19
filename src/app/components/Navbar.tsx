import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='w-full h-[82px] bg-[#043873] flex justify-between items-center px-4 md:px-10'>
        {/* Logo Section */}
        <div className='text-white'>
          <h1 className='text-3xl md:text-5xl'>logo</h1>
          {/* <Image src={image} width={191} height={34} alt='logo' /> */}
        </div>

        {/* Navbar Links & Button */}
        <div className='hidden md:flex items-center justify-between w-full max-w-[737.5px]'>
          <ul className='flex text-white gap-[35px]'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <button className='w-[126px] h-[60px] bg-[#FFE492] p-[16px 40px] rounded-lg'>
            Login
          </button>
        </div>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className='md:hidden'>
          <button className='text-white'>
            <i className="fas fa-bars"></i> {/* Use any icon library or custom icon */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
