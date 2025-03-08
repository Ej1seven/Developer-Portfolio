import React from "react";

interface ArticlesProps {}

export const Articles: React.FC<ArticlesProps> = ({}) => {
  return (
    <div
      className="text-[#FAF9F6] w-3/4 flex flex-col justify-center mx-auto md:relative max-w-screen-lg mb-64 z-30"
      id="articles"
    >
      <div className="flex md:w-3/5 lg:w-1/2 justify-center mb-8">
        {" "}
        <h1 className="text-3xl lg:text-3xl font-extrabold mr-2">Articles</h1>
        <div className="flex-grow border-t border-[#FAF9F6] my-auto px-2 lg:px-8 opacity-25"></div>
      </div>
      <div className="w-full flex flex-wrap flex-col md:flex-row p-2 md:p-4 items-center md:justify-evenly">
        <a
          href="https://codebuff.hashnode.dev/how-to-upload-display-and-save-images-using-nodejs-and-react"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%] rounded-md glow-on-hover cursor-pointer"
        >
          <img src="article1.jpg" className="rounded-md" />
        </a>
        <a
          href="https://codebuff.hashnode.dev/simple-styling-with-tailwind-css-and-react"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%]  glow-on-hover cursor-pointer"
        >
          <img src="article2.jpg" className="rounded-md" />
        </a>
        <a
          href="https://codebuff.hashnode.dev/the-power-of-hash-tables"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%] cursor-pointer"
        >
          <img
            src="article3.png"
            className="rounded-md md:mt-2 glow-on-hover"
          />
        </a>
        <a
          href="https://www.linkedin.com/pulse/4-essential-elements-all-web-developers-should-include-erik-hunter/"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%] cursor-pointer"
        >
          <img
            src="article4.png"
            className="rounded-md md:mt-2 glow-on-hover"
          />
        </a>
        <a
          href="https://codebuff.hashnode.dev/automating-accessibility-reports-with-spring-boot-and-react"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%] cursor-pointer"
        >
          <img
            src="article5.png"
            className="rounded-md md:mt-2 glow-on-hover"
          />
        </a>
        <a
          href="https://codebuff.hashnode.dev/web-scraping-drupal-websites-with-nodejs-and-puppeteer"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[425px] w-full sm:w-3/4 mt-4 md:mt-0 md:w-[48%] cursor-pointer"
        >
          <img
            src="article6.png"
            className="rounded-md md:mt-2 glow-on-hover"
          />
        </a>
      </div>
    </div>
  );
};
