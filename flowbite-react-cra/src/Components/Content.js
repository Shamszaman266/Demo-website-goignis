import React from 'react';
import { Button } from 'flowbite-react';

const Content = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{height:"30rem"}}> {/* Increased height for container */}
      <div className="flex w-[300%] h-full animate-slide-infinite-pause">
        <img 
          src="https://images7.alphacoders.com/134/1344394.png" 
          alt="Image 1" 
          className="w-1/3 h-full object-cover"
        />
        <img 
          src="https://images8.alphacoders.com/131/1319109.jpg" 
          alt="Image 2" 
          className="w-1/3 h-full object-cover"
        />
        <img 
          src="https://images7.alphacoders.com/135/1353386.png" 
          alt="Image 3" 
          className="w-1/3 h-full object-cover"
        />
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full " >
        <div className="bg-black backdrop-blur bg-opacity-40 p-8  shadow w-full h-full flex flex-col justify-center text-white" >
        <h2 className="text-4xl font-bold mb-4">True Remote</h2>
          <h3 className="text-4xl font-semibold mb-4">Assistance</h3>
          <h4 className="text-4xl font-medium">Design and Engineering</h4>
          <br/>
          <h4 className="text-xl font-medium">Save Time | Bid More Jobs | Design More Jobs </h4>
          <br/>
          <Button className='bg-red-700 font-bold'>Know more</Button>
          </div>

       
      </div>
    </div>
  );
};

export default Content;
