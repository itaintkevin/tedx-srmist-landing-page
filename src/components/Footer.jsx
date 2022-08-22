import React from 'react';

const Footer = () => {
    return(
        <footer>
            <ul className=" flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between bg-black text-white font-bold h-60 md:h-40 w-screen md:px-10">
                <ul>
                    <li className="text-3xl my-3"><span className='bg-white rounded px-2 text-black'>TED<sup className="text-red-600">x</sup></span> SRMIST</li>
                    <li className="text-center mb-5">Ideas worth spreading</li>
                </ul>
                <ul className="text-center mb-5 md:mb-0"> 
                    <li>Made by ~/ Kevin Paul</li>
                    <li>React.js ~/ Tailwind CSS</li>
                </ul>
                <ul className="flex items-center">
                    <li className="text-md mx-2">Home</li>
                    <li className="text-md mx-2">Events</li>
                    <li className="text-md mx-2">Team</li>
                    <li className="text-md mx-2">Contact Us</li>
                </ul>
            </ul>
      </footer>
    );
}

export default Footer;