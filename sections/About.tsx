import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const aboutCard = [
  {
    heading: "professional support",
    desec: "world class standard tech support.enquiry,maintanence.",
  },
  {
    heading: "professional support",
    desec: "world class standard tech support.enquiry,maintanence.",
  },
  {
    heading: "professional support",
    desec: "world class standard tech support.enquiry,maintanence.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen flex items-center w-full max-w-full ">
      <div className="w-[45%] flex flex-col  justify-around ml-8 py-4 h-[80vh] mt-8 relative">
        {aboutCard.map((item, i) => (
          <Card
            key={i}
            className="h-28 w-64 relative bg-black rounded-sm text-white "
          >
            <div className="absolute text-muted-foreground text-3xl font-bold -top-6 left-2">
              {i + 1}
            </div>
            <CardHeader className="pb-2 text-sm font-semibold capitalize">
              {item.heading}
            </CardHeader>
            <CardContent className="mt-0 ">
              <CardDescription className="mt-0">{item.desec}</CardDescription>
            </CardContent>
          </Card>
        ))}

        <div className="-z-10 absolute bottom-0 -left-[40%] h-full w-full  bg-slate-200 rounded-full" />
      </div>
      <div className="flex-1 flex flex-col gap-12 h-[70vh]">
        <div className="flex items-center gap-1">
          <div className="w-20 h-1 bg-black " />
          <h2 className="text-xl uppercase">About us</h2>
        </div>
        <h2 className="text-5xl ">
          We are the best
          <br />
          in your city
        </h2>
      </div>
      <div className="">3</div>
    </section>
  );
}
