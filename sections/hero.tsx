"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { motion as m } from "framer-motion";
import TextAnimation from "@/components/HeadText";
import {
  ArrowDownIcon,
  ArrowUpRightSquare,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="z-0 relative max-w-full w-full   min-h-screen px-6"
    >
      <div>
        {/* <m.h1
          variants={textvariants}
          initial="initial"
          animate="animate"
          className="text-center pt-32 "
        >
          <span>Your Motivation</span>
          <span className="block mt-2">as a Service</span>
        </m.h1> */}
        <TextAnimation />
        <p className="text-center mt-4 font-normal">
          GUVI and IIT-M certified
          <br />
          MERN STACK DEVELOPER
        </p>
        <Card className="max-w-[180px] mx-auto mt-6 p-2 bg-gray-200 dark:bg-slate-700">
          <CardHeader className="p-0">
            <div className="w-full">
              <Button
                className="w-full block bg-black text-white"
                variant="default"
              >
                My Latest Works
              </Button>
            </div>
          </CardHeader>
          <CardContent className=" p-0 text-center mt-2">
            <ArrowDownIcon className="inline-block" />
          </CardContent>
        </Card>
      </div>

      <div className=" flex flex-col sm:flex-row sm:flex-wrap  sm:justify-center lg:justify-around  min-h-[40vh] h-full    mt-8 max-w-full w-full px-8 gap-2">
        <Card className=" min-w-[14rem] w-full sm:w-max    self-end   bg-blue-200 dark:bg-slate-700  ">
          <CardHeader className="text-sm  font-bold pb-4">
            Visit my Linkedin Profile !
          </CardHeader>
          <CardContent>
            <Link href="#" className="">
              <Card className="bg-inherit border-0 hover:scale-105 duration-300 transition-all border-slate-700  text-white bg-blue-600">
                <CardContent className="flex items-center p-4 gap-2">
                  <div className="bg-slate-800 p-2 rounded-full">
                    <LinkedinIcon />
                  </div>
                  <p>LinkedIn</p>
                  <ArrowUpRightSquare />
                </CardContent>
              </Card>
            </Link>
          </CardContent>
        </Card>
        <Card className="min-w-[16rem]  sm:w-max min-h-[40vh]  h-full grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top " />
        <Card className="min-w-[14rem]  sm:w-max self-center   w-full text-center bg-neutral-300 dark:bg-slate-700">
          <CardHeader className="text-xl font-bold">
            Just An
            <br />
            Unconventional
            <br />
            Thinker !
          </CardHeader>
        </Card>
        <Card className="min-w-[14rem]  sm:w-max  bg-[url('/assets/writing.jpg')] w-full bg-cover bg-center overflow-hidden ">
          <CardHeader className="backdrop-brightness-75 text-2xl h-full text-slate-100 font-bold">
            Instantly know if
            <br />
            someone is <br />
            available
          </CardHeader>
        </Card>
        <Card className="min-w-[14rem]  sm:w-max self-start bg-slate-400 dark:bg-slate-700 w-full">
          <CardHeader className="text-sm font-bold pb-0">
            See my codeworks
          </CardHeader>
          <CardContent>
            <Link href="#" className="mt-4 inline-block w-full">
              <Card className="bg-inherit hover:scale-105 duration-300 transition-all bg-slate-800 border-slate-700 text-white">
                <CardContent className="flex items-center p-4 gap-2">
                  <div className="p-2 bg-slate-600 rounded-full">
                    <GithubIcon />
                  </div>
                  <p>Github</p>
                  <ArrowUpRightSquare />
                </CardContent>
              </Card>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
