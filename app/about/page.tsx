import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Create Next App",
  description: "Biography of the project creator",
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            </div>

            <div className="flex flex-col gap-4 text-center sm:text-left flex-1">
              <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Project Creator
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Full-stack Developer & Next.js Enthusiast
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
              About Me
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                Welcome! I am passionate about building modern web applications with cutting-edge technologies.
                This project showcases my journey learning Next.js 16, React 19, and the latest web development practices.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating delightful user experiences.
                My expertise spans across frontend and backend development, with a particular focus on
                React ecosystem and TypeScript.
              </p>
              <p>
                When I am not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Back Home
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
