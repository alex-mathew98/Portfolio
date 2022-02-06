import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey there, I'm Alex.
                        <br className="hidden lg:inline-block" />I love to make cool web and mobile applications.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I'm a motivated CS student with fundamental knowledge of software design, development and testing.I have a strong passion for building cool applications.Seeking to utilise my educational background with strong analytical,technical and programming skills to thrive as an entry level software developer.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        View my resume
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        View my projects
                        </a>
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="profile"
                        src="./profile.jpg"
                    />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;