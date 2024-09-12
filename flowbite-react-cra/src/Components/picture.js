import React from 'react';
import { Footer } from "flowbite-react";

const picture = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    

     

      <form className="w-full max-w-md space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Contact us for your Engineering Needs!</h1>
        <div className="border-b border-gray-900/10 pb-12">
          
          <p className="mt-1 text-sm leading-6 text-gray-600">GoIGNIS engineers are waiting to be added to your team. With our help you can reduce deadline stress and have better quality control over your projects, saving you money and allowing you to focus on business development. Let us handle your design engineering needs, contact us today!</p>

          <div className="mt-10 space-y-8">
            {/* First Name and Last Name in flex */}
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone Number in flex */}
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Message textarea */}
            <div className="sm:col-span-6">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows="1"
                  className="block w-full rounded-md border-0 py-1.2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default picture;
