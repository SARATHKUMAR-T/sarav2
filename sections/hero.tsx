import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen max-w-full  p-2 sm:p-0">
      <div className="max-w-6xl mt-32 text-center mx-auto">
        <h1>
          Managerial optimization
          <br />
          for your companies
        </h1>
      </div>

      <div className="p-4 flex h-48   w-full">
        <div className="w-[25%] min-w-[20rem] shrink-0">
          <Card className="w-[60%] mx-auto h-28 relative">
            <Card className="absolute flex justify-between flex-col w-[105%] h-36 -left-[56%] top-2 translate-x-[50%] z-10">
              <div className=" p-2 flex items-center gap-x-2">
                <div className="bg-black text-white  p-2 rounded-full">
                  <p className="text-sm font-semibold">9.5</p>
                </div>
                <p className=" text-sm">customer Happiness</p>
              </div>

              {/* absolute card */}
              <div className="w-[110%] -translate-y-[50%] p-2 flex items-center gap-x-2 bg-black rounded-2xl -translate-x-[50%] absolute top-[50%] left-[50%]">
                <div className="bg-lime-300   p-2 rounded-full">
                  <p className="text-sm text-black font-semibold">9.5</p>
                </div>
                <p className="text-white text-sm">customer Happiness</p>
              </div>
              {/* 2nd card */}
              <div className="p-2 flex items-center gap-x-2">
                <div className="bg-gray-700 text-white  p-2 rounded-full">
                  <p className="text-sm font-semibold">9.5</p>
                </div>
                <p className=" text-sm">customer Happiness</p>
              </div>
            </Card>
          </Card>
        </div>
        <div className="flex-1">
          <p className="text-center">
            Whether you choose efficiency or flexibility for your organization,
            restructuring your teams,will lead to improved
            productivity,collaboration and overall business results
          </p>
          <div className="flex gap-3 items-center justify-center mt-4">
            <Button variant="secondary">see my latest works</Button>
            <Button>Hire Me</Button>
          </div>
        </div>
        <div className="w-[25%]">3</div>
      </div>
      <div className="w-full px-12 py-6 flex justify-evenly flex-wrap gap-y-6 ">
        <Card className="w-52 h-60">1</Card>
        <Card className="w-52 h-60">1</Card>
        <Card className="w-52 h-60">1</Card>
        <div className="w-52 h-60">
          <Card className="h-[50%] ">234</Card>
          <div className="flex h-[50%] w-full">
            <Card className="h-full w-full flex flex-col items-center justify-center">
              <h3 className="font-bold text-3xl">97</h3>
              <p className="text-sm">managers</p>
            </Card>
            <Card className="bg-lime-300/70 h-full w-full flex flex-col items-center justify-center">
              <h3 className="font-bold text-3xl">100+</h3>
              <p className="text-sm">projects</p>
            </Card>
          </div>
        </div>
        <Card className="w-52 h-60">1</Card>
      </div>
    </section>
  );
}
