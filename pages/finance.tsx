import React from "react";
import Link from "next/link";
import { Footer } from "../components/Footer";

interface FinanceProps {}

export default function Finance({}: FinanceProps) {
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
              src="/Finance.png"
              className="rounded-md glow-on-hover cursor-pointer"
            />
            <div className="sm:w-1/3 md:w-1/4 absolute bottom-0 right-0 m-[1px] m-[5px] xsm:m-2 sm:mb-2 md:mb-4 flex justify-center">
              <a
                href="https://finance.umn.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-32 md:w-full bg-[#091310] text-[8px] xsm:text-xs sm:text-sm md:text-base p-1 xsm:p-2 max-w-[150px] rounded-md">
                  Visit Website
                </button>
              </a>
            </div>
          </div>

          <div className="w-full mt-16">
            <ul className="mb-4">
              <li>
                <span className="font-bold">Role:</span> Developer
              </li>
              <li>
                <span className="font-bold">Client:</span> University Finance
                and University Budget, University of Minnesota
              </li>
              <li>
                <span className="font-bold">Project:</span> Finance Web Project
                (Budget and Finance Microsites)
              </li>
              <li>
                <span className="font-bold">Technologies:</span> Drupal,
                Folwell Theme, Analytics/Measurement Setup, Accessibility
                Remediation
              </li>
            </ul>

            <p className="text-sm md:text-base">
              I led the University of Minnesota&apos;s Finance Web Project, a
              large-scale effort to unify and modernize finance properties such
              as finance.umn.edu, pay.umn.edu, controller.umn.edu, tax.umn.edu,
              purchasing.umn.edu, and related service domains. The objective
              was to transform a fragmented set of websites into a cohesive,
              accessible digital ecosystem that better supports both internal
              and external audiences.
            </p>
            <p className="text-sm md:text-base mt-4">
              The project was built on Drupal with the Folwell theme and focused
              on content structure, information architecture, and usability
              across multiple levels of user needs: public-facing summaries,
              leadership-level guidance, and department-level operational
              detail. My work supported implementation and front-end development
              for this strategy, while ensuring the experience remained
              maintainable for the finance content team.
            </p>
            <p className="text-sm md:text-base mt-4">
              A key deliverable was accessibility. We audited legacy pages and
              documents, improved content presentation and formatting, and
              aligned implementation with accessibility standards to reduce
              errors and warnings prior to launch. In parallel, the team
              repaired analytics tracking and measurement so leadership could
              reliably evaluate page traffic, content relevance, device usage,
              and process-oriented engagement over time.
            </p>

            <p className="my-6 text-sm md:text-base font-bold">
              Highlights from the project brief and delivery plan:
            </p>
            <ul className="text-sm md:text-base list-disc pl-6 space-y-2">
              <li>
                Reorganized finance and budget content for improved wayfinding
                and clearer ownership by office/function.
              </li>
              <li>
                Supported a cross-functional strategy spanning U-MarComm, U
                Finance stakeholders, design, UX, development, and analytics.
              </li>
              <li>
                Built and tested site updates during a structured multi-phase
                rollout from planning through launch.
              </li>
              <li>
                Contributed to launch readiness work including final review,
                edits, content team documentation, and post-launch enablement.
              </li>
            </ul>
            <p className="text-sm md:text-base mt-6">
              This project strengthened my experience delivering enterprise
              Drupal work in a collaborative environment where accessibility,
              content governance, and analytics were as critical as the code
              itself.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
