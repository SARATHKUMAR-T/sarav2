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

      <div className="p-4 flex bg-red-500 w-full">
        <div className="w-[25%] shrink-0">
          <Card className="w-[60%] mx-auto h-28 relative">
            <Card className="absolute w-[110%] -left-[50%] translate-x-[50%] z-10"></Card>
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
      <div>heading</div>
    </section>
  );
}
