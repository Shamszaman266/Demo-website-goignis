import React from 'react';
import { Card } from "flowbite-react";

const Services = () => {
  return (

    // background: rgb(218,252,255);
    // background: linear-gradient(163deg, rgba(218,252,255,1) 86%, rgba(133,149,146,1) 100%);

    <div className='bg-gray-50'>
      <div className="flex justify-center pt-10 pb-8">
        <h1 className="text-8xl font-bold">Our Services</h1>
      </div>
      
      <div className='pb-12 pt-8'>
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
        <Card className="max-w-sm bg-slate-200">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            FIRE ALARM ENGINEERING
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            At GoIGNIS, we understand the critical role that a well-designed fire alarm system plays in protecting life and property. Our engineers have the expertise to design fire....
          </p>
        </Card>

        <Card className="max-w-sm bg-slate-200">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            FIRE SPRINKLER ENGINEERING
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Our Fire Sprinkler Engineering team offers comprehensive design services that comply with NFPA standards and relevant codes. Using advanced software such as ......
          </p>
        </Card>

        <Card className="max-w-sm bg-slate-200">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ELECTRICAL ENGINEERING
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Our electrical engineering team at GoIGNIS understands the ever-increasing complexity and functionality of building systems, driven by the Internet of Things (IoT). We are......
          </p>
        </Card>

        <Card className="max-w-sm bg-slate-200">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          HVAC ENGINEERING
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           

At GoIGNIS, we understand that heating, ventilation, and air conditioning (HVAC) are crucial components in any building. We have a team of....
          </p>
        </Card>

        <Card className="max-w-sm bg-slate-200">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ARCS ENGINEERING
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           

At GoIGNIS, we understand the importance of Auxiliary Radio Communication Systems (ARCS) in high-rise buildings.............
          </p>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default Services;
