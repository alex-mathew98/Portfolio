import React, { Component } from 'react';
import { BriefcaseIcon } from "@heroicons/react/solid";

export default class Resume extends Component {
  render() {
    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Resume
                </h1>
                </div>
                <div className='flex justify-around'>
                    <embed src="./resume.pdf" width="800px" height="1150px" className='items-center'/>    
                </div>
            </div>
        </section>
    );
  }
}
