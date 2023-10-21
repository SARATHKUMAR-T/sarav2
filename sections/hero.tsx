import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(80vh-64px)]">
      <h1 className="text-center mt-48 ">
        <span>Your Motivation</span>
        <span className="block mt-2">as a Service</span>
      </h1>
      <p className="text-center mt-6 font-normal">
        The joyful productvity app. schedule
        <br />
        time for tods,events and contacts.
      </p>
      <Card className="max-w-[180px] mx-auto mt-6 p-2 bg-gray-200">
        <CardHeader className="p-0">
          <div className="w-full">
            <Button className="w-full block bg-black">Try it now</Button>
          </div>
        </CardHeader>
        <CardContent className="text-sm p-0 text-center mt-2">
          free for personal use
        </CardContent>
      </Card>

      <div className="absolute -z-10 bottom-0 h-[40vh] items-end flex max-w-full w-full px-8 gap-2">
        <Card className="max-w-1/4 h-full bg-black text-white w-full">
          <CardHeader className="text-sm text-muted-foreground">
            Post a Quote
          </CardHeader>

          <CardContent>
            <p className="text-sm">Authour</p>
            <Card className="bg-inherit text-white">
              <CardHeader className="text-sm text-muted-foreground">
                #self
              </CardHeader>
            </Card>
            <p className="text-sm mt-2">Quote</p>
            <Card className="bg-inherit text-white">
              <CardHeader className="text-sm text-muted-foreground">
                Your quotes here...
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
        <Card className="max-w-1/4 h-full bg-[url('/assets/man2.jpg')] w-full bg-cover bg-center " />
        <Card className="max-w-1/4   w-full text-center bg-neutral-300">
          <CardHeader className="text-xl font-bold">
            Find a Quote
            <br />
            that inspires
            <br />
            you!
          </CardHeader>
        </Card>
        <Card className="max-w-1/4 w-full">
          <CardHeader>second card</CardHeader>
        </Card>
        <Card className="max-w-1/4  h-full bg-[url('/assets/writing.jpg')] w-full bg-cover bg-center overflow-hidden ">
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
