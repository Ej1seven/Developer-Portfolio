import Link from 'next/link';
import React from 'react';

interface ProjectProps {}

export const Feedback: React.FC<ProjectProps> = ({}) => {
  return (
    <div
      className="text-[#FAF9F6] w-3/4 flex flex-col justify-center mx-auto md:relative max-w-screen-lg mb-20"
      id="feedback"
    >
      <div className="flex md:w-3/5 lg:w-1/2 justify-center mb-10">
        {' '}
        <h1 className="text-3xl lg:text-3xl font-extrabold mr-2">
          Client Feedback
        </h1>
        <div className="flex-grow border-t border-[#FAF9F6] my-auto px-2 lg:px-8 opacity-25"></div>
      </div>
      <div className="w-full flex flex-col">
        <div>
          <div className="flex mb-4 ">
            <img src="/star.png" className="mr-1 max-h-[24px] my-auto" />
            <img src="/star.png" className="mr-1 max-h-[24px] my-auto" />
            <img src="/star.png" className="mr-1 max-h-[24px] my-auto" />
            <img src="/star.png" className="mr-1 max-h-[24px] my-auto" />
            <img src="/star.png" className="mr-1 max-h-[24px] my-auto" />
            <p className="ml-1">5.00 Dec 21, 2022 - Jan 10, 2023 </p>
          </div>
          <p className="italic">
            "Erik completely revamped our hemp product e-commerce store with a
            Shopify theme. He did an amazing job while staying in great
            communication, he gets the work done well and quickly and I never
            doubted his capabilities once. Definitely recommend him and will use
            him in the future!"
          </p>
        </div>
      </div>
    </div>
  );
};
