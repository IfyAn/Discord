import emailjs from '@emailjs/browser';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function DirectMessage() {
    const [user] = useAuthState(auth);
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'Oh-Yeah', e.target, 'user_vKGaEk63KqAfDYna5OI1P')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="flex justify-center items-center bg-[#9226F3] h-screen">
            <div className="ml-10 mb-10">
                    <Link to='/channels'>
                        <ArrowLeftIcon className="icon" />
                    </Link>
                </div>
            <div class="m-5 max-w-xl">
                <h1 className="block text-white text-xl font-bold mb-10"> Send Direct Message To Oh-Yeah Team</h1>
                <form onSubmit={sendEmail} class="bg-white shadow-md hover rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={user?.displayName} name={user?.displayName}/>
                        </div>
                        <div class="mb-4">
                            <input type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={user?.email} name={user?.email}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 mt-4 pt-2 mx-auto border rounded">
                            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" onSubmit={sendEmail} value="Send Message"></input>
                        </div>
                    </form>
            </div>
        </div>
    )
}