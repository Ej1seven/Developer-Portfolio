import React from 'react';

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div
      className="text-[#FAF9F6] w-3/4 xl:w-1/2 flex flex-col md:flex-row justify-center mx-auto mb-64 max-w-screen-md"
      id="about"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-8">
        <div className="flex w-full justify-center mb-4">
          {' '}
          <h1 className="text-3xl font-extrabold mr-2">About</h1>
          <div className="flex-grow border-t border-[#FAF9F6] my-auto px-8 opacity-25"></div>
        </div>
        <p>
          Nearly three years ago, I decided to switch career paths and pursue
          web development. Since then, I have learned many new technologies, but
          my focus is targeted on React and Angular. During my coding journey I
          have developed numerous full-stack applications utilizing this modern
          tech stack. Throughout the years, my design skills have been refined
          through the utilization of APIs like Tailwind CSS and Material UI. The
          majority of my projects involve implementing a database such as
          Postgres, MySQL, or Firebase.
        </p>
        <br />
        {/* <div className="mb-4 border-t border-[#FAF9F6]">
          <div className="">Tech Stack</div>
        </div> */}
        <div className="w-full flex ">
          {' '}
          <div className="flex-grow border-t border-[#FAF9F6] w-1/4 my-auto opacity-25"></div>
          <h1 className="text-3xl lg:text-3xl font-extrabold  w-2/3 text-center mb-4">
            Tech Stack
          </h1>
          <div className="flex-grow border-t border-[#FAF9F6] w-1/4 my-auto opacity-25"></div>
        </div>
        <div className="flex px-4">
          <div className="w-1/2 list-inside">
            <ul className="list-disc">
              <li>Typescript</li>
              <li>Java</li>
              <li>Angular</li>
              <li>React</li>
            </ul>
          </div>
          <div className="w-1/2 list-inside">
            <ul className="list-disc">
              <li>Node.js</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>Postgres</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto md:min-w-[150px] xl:w-1/2 md:ml-8 my-auto">
        <img src="/profilePhoto.jpg" className="rounded-md glow" />
      </div>
    </div>
  );
};
