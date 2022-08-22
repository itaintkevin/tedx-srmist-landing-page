import React from 'react';

const Nav = () => {
    return(
    <nav>
        <ul className=" flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-10 bg-red-600 text-white font-bold h-50 w-screen ">
            <li className="flex text-3xl my-3"><span className="bg-slate-800 rounded px-2">TED<sup className="text-red-600">x</sup></span>&nbsp;SRMIST</li>
            <ul className="flex flex-col sm:flex-row items-center bg-[#141B28] sm:bg-red-600 w-full sm:w-min">          
                <li className="text-md text-center border-b border-slate-800 sm:border-b-0 w-full sm:w-min mx-2 py-2">Home</li>
                <li className="text-md text-center border-b border-slate-800 sm:border-b-0 w-full sm:w-min mx-2 py-2">Events</li>
                <li className="text-md text-center border-b border-slate-800 sm:border-b-0 w-full sm:w-min mx-2 py-2">Team</li>
                <li className="text-md text-center border-b border-slate-800 sm:border-b-0 w-full sm:w-max mx-2 py-2">Contact Us</li>
            </ul>
        </ul>
    </nav>
    );
}

export default Nav;