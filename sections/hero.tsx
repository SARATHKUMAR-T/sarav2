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
import { delay } from "framer-motion/dom";
import TextAnimation from "@/components/HeadText";
import { ArrowDownIcon } from "lucide-react";

const textvariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 50,
        stiffness: 10000,
        restDelta: 0.001,
      },
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative max-w-full w-full   min-h-screen px-6"
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
                Hire Me
              </Button>
            </div>
          </CardHeader>
          <CardContent className=" p-0 text-center mt-2">
            <ArrowDownIcon className="inline-block" />
          </CardContent>
        </Card>
      </div>

      <div className=" grid grid-cols-1 h-[40vh] auto-rows-auto sm:grid-cols-3 md:grid-cols-5  mt-8 max-w-full w-full px-8 gap-2">
        <Card className="max-w-[1/5]  h-full bg-black text-white w-full">
          <CardHeader className="text-sm font-bold">Find Me Here</CardHeader>

          <CardContent>
            <Card className="bg-inherit text-white">
              <ArrowDownIcon />
            </Card>
            <p className="text-sm mt-2">Quote</p>
            <Card className="bg-slate-500 text-white">
              <CardHeader className="text-sm text-muted-foreground">
                Your quotes here...
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
        <Card className="max-w-[1/5] h-[60vh] sm:h-full grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-center " />
        <Card className="max-w-[1/5] self-end   w-full text-center bg-neutral-300 dark:bg-slate-700">
          <CardHeader className="text-xl font-bold">
            Unconventional
            <br />
            Thinker !
          </CardHeader>
        </Card>
        <Card className="max-w-[1/5]   w-full">
          <CardHeader>second card</CardHeader>
        </Card>
        <Card className="max-w-[1/5]  bg-[url('/assets/writing.jpg')] w-full bg-cover bg-center overflow-hidden ">
          <CardHeader className="backdrop-brightness-75 text-2xl h-full text-slate-100 font-bold">
            Instantly know if
            <br />
            someone is <br />
            available
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
