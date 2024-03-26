"use client";

import { Boxes } from "@/components/ui/background";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "@/components/ui/project-card";
import { cn } from "@/utils/cn";

const Dashboard = () => {
  return (
    <>
      <nav className="flex items-center justify-between  p-4">
        <div className="text-white text-lg font-semibold">
          Simplytics
        </div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Add Projects
        </button>
      </nav>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Simple No-Shit Analytics
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Send `Get` request by appending on our url and we will track it for
          you.
        </p>
      </div>
      <div className="flex py-20 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default Dashboard;
