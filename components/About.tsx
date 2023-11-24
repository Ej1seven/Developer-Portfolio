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
          As a seasoned web developer, I thrive in the dynamic realm of coding
          and enjoy the ever-evolving challenges that come with it. My journey
          began with a simple "Hello, World!" and has since evolved into a
          deep-seated passion for creating robust, user-friendly applications.
          Today, I am a professional web developer with three years of
          experience helping clients design, develop, and maintain complex
          applications. My skill set spans across the web development landscape,
          from front-end technologies like HTML, CSS, and JavaScript to back-end
          frameworks such as Node.js and Spring Boot. My goal is not just to
          write code but to build solutions that make a meaningful impact.
          Whether it's optimizing performance, enhancing user interfaces, or
          solving complex problems, I approach each project with a blend of
          creativity and pragmatism.
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
              <li>PHP</li>
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
        <img src="/Erik-1.png" className="rounded-md glow" />
      </div>
    </div>
  );
};
