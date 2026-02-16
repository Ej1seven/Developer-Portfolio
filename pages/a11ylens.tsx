import React from "react";
import Link from "next/link";
import { Footer } from "../components/Footer";

interface A11yLensProps {}

export default function A11yLens({}: A11yLensProps) {
  return (
    <div className="text-white overflow-hidden">
      <div className="w-full h-20 flex items-center text-[#FAF9F6] ease-in duration-500">
        <Link
          href="/"
          className="text-bold text-5xl w-1/4 text-glow cursor-pointer pl-12"
        >
          E.DEV
        </Link>
      </div>
      <div className="w-full max-w-[900px] flex justify-center p-8 mx-auto">
        <div className="w-full flex flex-col relative">
          <div className="w-full aspect-video rounded-md relative">
            <img
              src="/A11yLens.png"
              className="rounded-md glow-on-hover cursor-pointer"
            />
            <div className="sm:w-1/2 md:w-1/3 absolute bottom-0 right-0 m-[1px] m-[5px] xsm:m-2 sm:mb-2 md:mb-4 flex justify-center gap-2">
              <a
                href="https://codebuff.hashnode.dev/a11ylens-part-1-how-i-built-an-accessibility-scanner-with-nextjs-prisma-and-axe-core"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-[#091310] text-[8px] xsm:text-xs sm:text-sm md:text-base p-1 xsm:p-2 rounded-md">
                  Part 1
                </button>
              </a>
              <a
                href="https://codebuff.hashnode.dev/a11ylens-part-2-frontend-architecture-in-react-state-components-and-ui-patterns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-[#091310] text-[8px] xsm:text-xs sm:text-sm md:text-base p-1 xsm:p-2 rounded-md">
                  Part 2
                </button>
              </a>
            </div>
          </div>

          <div className="w-full mt-16">
            <ul className="mb-4">
              <li>
                <span className="font-bold">Role:</span> Full-Stack Developer
              </li>
              <li>
                <span className="font-bold">Project:</span> A11yLens
                Accessibility Scanner
              </li>
              <li>
                <span className="font-bold">Technologies:</span> Next.js 14 App
                Router, React, TypeScript, Tailwind CSS, Prisma, SQLite,
                Puppeteer, axe-core, Recharts
              </li>
              <li>
                <span className="font-bold">GitHub:</span>{" "}
                <a
                  href="https://github.com/Ej1seven/A11yLens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39FF14] underline"
                >
                  github.com/Ej1seven/A11yLens
                </a>
              </li>
            </ul>

            <p className="text-sm md:text-base">
              A11yLens is a full-stack web app I built to automate website
              accessibility scanning and reporting. Users can register, create
              projects, add site URLs, run scans, review grouped issue results,
              invite collaborators, and export CSV reports. The goal was to
              provide a practical workflow that turns raw scan data into clear,
              prioritized remediation tasks.
            </p>
            <p className="text-sm md:text-base mt-4">
              The backend uses Next.js route handlers with Zod validation,
              Prisma data access, and cookie-based session authentication.
              Passwords are hashed, session tokens are hashed before storage,
              and middleware protects private routes. This gives the app a
              secure, maintainable auth model without adding external auth
              providers.
            </p>
            <p className="text-sm md:text-base mt-4">
              The scan pipeline was designed for real-world sites. It validates
              permissions, starts an asynchronous scan job, crawls URLs using
              sitemap discovery plus BFS fallback, runs axe-core checks via
              Puppeteer, maps impacts to app severity levels, and persists issue
              records to the database. The UI polls scan status every few
              seconds so users can see progress in near real time.
            </p>

            <p className="my-6 text-sm md:text-base font-bold">
              Core features:
            </p>
            <ul className="text-sm md:text-base list-disc pl-6 space-y-2">
              <li>Project and site management with owner/collaborator access.</li>
              <li>Invite workflow with pending, accept, and reject states.</li>
              <li>Severity summary cards and filterable issue lists.</li>
              <li>Charts for severity distribution and top issue types.</li>
              <li>Grouped issue cards by page with expandable context.</li>
              <li>Server-side CSV export for accessibility reporting.</li>
            </ul>

            <p className="text-sm md:text-base mt-6">
              Building A11yLens strengthened my skills in end-to-end product
              architecture: translating requirements into schema design, auth
              and access control, asynchronous processing, and a frontend UX
              optimized for analysis workflows.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
