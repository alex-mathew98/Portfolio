import React, { Component } from 'react';
import { MailIcon, PhoneIcon,GlobeAltIcon } from "@heroicons/react/solid";

class Contact extends Component {
    render() {
        return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mb-10">
                      Lets Connect!
                    </h1>
                    {/* <div className="bg-gray-800 rounded flex p-4 h-full items-center"> */}
                    <div className='flex justify-around'>
                      <div className='flex justify-center bg-gray-800 rounded flex p-4 w-64 items-center '>
                      <svg
                        class="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                        <a href="www.linkedin.com/in/alex-mathew98" className="title-font font-medium text-white px-8">
                          LinkedIn
                        </a>
                      </div>
                      <div className='flex justify-center bg-gray-800 rounded flex p-4 w-64 items-center '>
                        <MailIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"></MailIcon>
                        <a href="mailto:alexmathew_98@outlook.com" className="title-font font-medium text-white px-8">
                            Email
                        </a>
                      </div>
                      <div className='flex justify-center bg-gray-800 rounded flex p-4 w-64 items-center '>
                        <PhoneIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"></PhoneIcon>
                        <span className="title-font font-medium text-white px-8">
                        <a href="tel:819-919-9767" className="title-font font-medium text-white px-8">
                            Call
                        </a>    
                        </span>
                      </div>
                      <div className='flex justify-center bg-gray-800 rounded flex p-4 w-64 items-center '>
                        <GlobeAltIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"></GlobeAltIcon>
                        <a href="https://github.com/alex-mathew98" className="title-font font-medium text-white px-8">
                            Github
                        </a>
                      </div>
                    </div>
                    </div>
                </div>
          </section>
        );
    }
}

export default Contact;