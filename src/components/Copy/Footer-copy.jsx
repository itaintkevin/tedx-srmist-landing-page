import React from 'react';

const Footer = () => {
    return(
        <footer>
            <ul className="flex bg-black h-44 text-white font-bold items-center justify-between">
            <ul className="ml-10">
                <li className="text-3xl"><span className='bg-white rounded px-2 text-black'>TED<sup className="text-red-600">x</sup></span> SRMIST</li>
                <li>Ideas worth spreading</li>
            </ul>
            <ul>
                <li>Made by ~/ Kevin Paul</li>
                <li>React.js ~/ Tailwind CSS</li>
            </ul>
            <ul className="flex mr-10">
                <li className="mx-4 text-md">Home</li>
                <li className="mx-4 text-md">Events</li>
                <li className="mx-4 text-md">Team</li>
                <li className="mx-4 text-md">Contact Us</li>
            </ul>
            </ul>
      </footer>
    );
}

export default Footer;