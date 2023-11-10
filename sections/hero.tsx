/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className="min-h-screen max-w-full  p-2 sm:p-0">
      <div className="max-w-6xl mt-10 sm:mt-32 text-center mx-auto">
        <h1 className="capitalize text-5xl sm:text-7xl">
          MERN stack
          <br />
          web developer
        </h1>
      </div>

      <div className="p-4 flex mt-6 md:mt-0 items-center flex-col  md:flex-row h-full md:h-full mb-3   w-full">
        <div className="w-[25%] mx-auto min-w-[20rem] shrink-0">
          <Card className="w-[60%] mx-auto h-28 mb-20 md:mb-0 relative">
            <Card className="absolute flex justify-between flex-col w-[105%] h-36 -left-[56%] top-2 translate-x-[50%] z-10">
              <div className=" p-2 flex items-center gap-x-2">
                <div className="bg-black dark:bg-gray-700 text-white  p-2 rounded-full">
                  <p className="text-sm  font-semibold">F</p>
                </div>
                <p className=" text-sm">frontend development</p>
              </div>

              {/* absolute card */}
              <div className="w-[110%] -translate-y-[50%] p-2 flex items-center gap-x-2 bg-black dark:bg-gray-600 rounded-2xl -translate-x-[50%] absolute top-[50%] left-[50%]">
                <div className="bg-lime-300   p-2 rounded-full">
                  <p className="text-sm text-black font-semibold">FS</p>
                </div>
                <p className="text-white text-sm">fullstack development</p>
              </div>
              {/* 2nd card */}
              <div className="p-2 flex items-center gap-x-2">
                <div className="bg-gray-700 text-white  p-2 rounded-full">
                  <p className="text-sm font-semibold">B</p>
                </div>
                <p className=" text-sm">backend development</p>
              </div>
            </Card>
          </Card>
        </div>
        <div className="flex-1">
          <p className="text-center text-sm sm:text-md md:text-lg">
            Discover the web through my lens—I'm{" "}
            <span className="uppercase text-lg sm:text-xl text-transparent font-bold dark:text-white bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]  bg-clip-text">
              Sarath Kumar T
            </span>
            , a proud GUVI and IIT-M certified MERNstack developer based in
            Trichy. I infuse each line of code with passion, precision, and a
            touch of innovation
          </p>
          <div className="flex gap-3 items-center justify-center mt-4">
            <Button asChild variant="secondary">
              <Link href="#projects">see my latest works</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
        <div className="w-[25%] mx-auto mt-12 md:mt-0 flex  items-center justify-center">
          <div className="flex flex-col  p-8 border-r-2 border-slate-400">
            <p className="text-6xl border-b-2 border-r-2 border-slate-400">M</p>
            <p className="text-6xl">E</p>
          </div>
          <div className="flex flex-col  p-8">
            <p className="text-6xl border-b-2 border-slate-400">R</p>
            <p className="text-6xl border-l-2 border-slate-400">N</p>
          </div>
        </div>
      </div>
      <div className="w-full  px-12 py-6 flex justify-evenly flex-wrap gap-y-6 ">
        <Card
          className={` w-52 h-60 bg-[url('/assets/linkedin1.jpg')] bg-center overflow-hidden bg-cover`}
        >
          <div className=" bg-opacity-30 flex items-end bg-blue-900 p-2 h-full">
            <Link
              href="https://www.linkedin.com/in/sarathfsd/"
              target="_blank"
              rel="noreferror"
              className={`${styles.glow} w-full p-2 flex items-center justify-center capitalize`}
            >
              visit my LinkedIn
              <ExternalLinkIcon className="ml-2" />
            </Link>
          </div>
        </Card>
        <Card className="w-52 h-60 bg-[url('/assets/man1.jpg')] bg-cover bg-center "></Card>
        <Card className="w-52 h-60 bg-[url('/assets/think.jpg')] bg-center overflow-hidden bg-cover">
          <div className=" bg-opacity-40 flex items-end bg-black p-2 h-full">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E0EAFC] to-[#fff] text-transparent bg-clip-text ">
              Just an unconventional thinker
            </h2>
          </div>
        </Card>
        <div className="w-52 h-60">
          <Card className="h-[50%] bg-slate-700 flex items-center justify-center ">
            <CardHeader className="uppercase text-lg text-transparent font-bold bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text">
              Github STATS
            </CardHeader>
          </Card>
          <div className="flex h-[50%] w-full">
            <Card className="h-full w-full flex flex-col items-center justify-center">
              <h3 className="font-bold text-3xl">7+</h3>
              <p className="text-sm">FSD Projects</p>
            </Card>
            <Card className="bg-lime-300/70 h-full w-full flex flex-col items-center justify-center">
              <h3 className="font-bold text-3xl">81+</h3>
              <p className="text-sm">Repositories</p>
            </Card>
          </div>
        </div>
        <Card
          className={` w-52 h-60 bg-[url('/assets/github3.jpg')] bg-center overflow-hidden bg-cover`}
        >
          <div className=" bg-opacity-30 flex items-end bg-black p-2 h-full">
            <Link
              href="https://github.com/SARATHKUMAR-T"
              target="_blank"
              rel="noreferror"
              className={`${styles.glow} w-full p-2 flex items-center justify-center capitalize`}
            >
              visit my github
              <ExternalLinkIcon className="ml-2" />
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
