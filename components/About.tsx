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
          web development. Since then, I have learned many new technologies
          focusing primarily on React. As a QA software engineer, my
          problem-solving skills are put to the test on a daily basis. I am
          expected to provide clear communication and documentation when
          collaborating with the software development team. Fortunately, my
          current position has taught me how to work in a agile environment and
          prioritize tasks.
        </p>
        <br />
        <p>
          During my coding journey, I have worked on many full-stack
          applications using Node and React. Over the years, I have improved my
          design skills using APIs such as Tailwind CSS and Material UI. Most of
          my projects include databases using either Postgres or Firebase.{' '}
        </p>
        <br />
        <p className="mb-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="flex px-4">
          <div className="w-1/2 list-inside">
            <ul className="list-disc">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Node</li>
            </ul>
          </div>
          <div className="w-1/2 list-inside">
            <ul className="list-disc">
              <li>React</li>
              <li>SQL</li>
              <li>Prisma 2</li>
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
