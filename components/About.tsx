import React from "react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div
      className="text-[#FAF9F6] w-3/4 xl:w-1/2 flex flex-col md:flex-row justify-center mx-auto mb-64 max-w-screen-md"
      id="about"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-8 md:mr-8">
        <div className="flex w-full justify-center mb-4">
          {" "}
          <h1 className="text-3xl font-extrabold mr-2">About Me</h1>
          <div className="flex-grow border-t border-[#FAF9F6] my-auto px-8 opacity-25"></div>
        </div>
        <p>
          I build accessible, production-ready web applications that solve
          complex real-world problems. Over the past five years, I&apos;ve led
          projects across higher education and startups. I rebuilt the
          University of Minnesota Finance web ecosystem in Drupal, shipped
          ReportWeaver for automated accessibility reporting, and created
          A11yLens using Next.js, Prisma, Puppeteer, and axe-core. I work
          confidently across the stack with React, Next.js, Node.js, Spring
          Boot, and Drupal, with a focus on measurable outcomes: stronger
          performance, clearer user experiences, and maintainable systems teams
          can scale.
        </p>
        <br />
        {/* <div className="mb-4 border-t border-[#FAF9F6]">
          <div className="">Tech Stack</div>
        </div> */}
        <div className="w-full flex ">
          {" "}
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
              <li>Drupal</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto md:min-w-[220px] xl:w-3/5 md:ml-8 my-auto">
        <img src="/Erik-Full_Body_cropped_minified.jpg" className="rounded-md glow" />
      </div>
    </div>
  );
};
