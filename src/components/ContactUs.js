import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline';

function ContactUs(){
    return(
        <div class="min-h-screen flex items-center justify-center px-4 bg-[#9226F3]">
              <div className="mb-10 mr-10">
                    <Link to='/'>
                        <ArrowLeftIcon className="icon" />
                    </Link>
                </div>
            <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
                <div class="p-4 border-b hover">
                    <h2 class="text-2xl ">
                        Contact Us
                    </h2>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Full name
                        </p>
                        <p>
                            Oh-Yeah Team
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Email Address
                        </p>
                        <p>
                            Chukwuanyan@gmail.com
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Phone Number
                        </p>
                        <p>
                            09069094011
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Specialize
                        </p>
                        <p>
                            Web & Mobile App Development
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            About Me
                        </p>
                        <p>
                        I am a Programmer (Javascript Full-Stack developer).  Web(React) & Mobile App(React Native).
                    I want to be involved in building multiple successful products that aims at making the world a better place, while I keep growing my technical and soft skills as a software developer. 
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                        <p class="text-gray-600">
                            Socil Medial
                        </p>
                        <div class="space-y-2 border: 2px solid var(--border-color) flex items-center justify-between border-radius: 50% transition: all .4s ease-in-out;">
                        <a href="https://web.facebook.com/?_rdc=1&_rdr" className="#004dcf">
                            <FacebookIcon />
                        </a>
                        <a href="https://github.com/IfyAn?tab=repositories" className=" color: #5F4687">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/anyam-ifeanyi-455189193/" >
                            <LinkedInIcon className="color: #004dcf"/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
