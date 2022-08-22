import React from 'react';

const Nav = () => {
    return(
    <nav>
        <ul className="flex bg-red-600 h-14 text-white font-bold items-center justify-between">
        <li className="ml-10 mr-96 text-3xl"><span className="bg-slate-800 rounded px-2">TED<sup className="text-red-600">x</sup></span> SRMIST</li>
        <ul className="flex mr-10">          
            <li className="mx-4 text-md">Home</li>
            <li className="mx-4 text-md">Events</li>
            <li className="mx-4 text-md">Team</li>
            <li className="mx-4 text-md">Contact Us</li></ul>
        </ul>
    </nav>
    );
}

export default Nav;