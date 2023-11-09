import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const about = [
  {
    heading: "Who Am I..?",
    desec:
      "Proficient MERN stack developer, well-versed in MongoDB, Express.js, Node.js, and React.js. With a passion for crafting seamless digital experiences.",
  },
  {
    heading: "What I Do..?",
    desec:
      "I specialize in developing aesthetically pleasing and robust websites. My expertise lies in crafting highly intuitive user experiences while maintaining code consistency at the core.",
  },
  {
    heading: "What You Can Expect..?",
    desec:
      "Expect excellence in every project – a commitment to deliver robust and high-quality work.With an innovative mindset, I consistently introduce fresh ideas, ensuring your projects transcend conventional boundaries.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex  justify-center flex-col max-w-full py-16 "
    >
      <div className="flex items-center mt-20 mx-auto ">
        <div className="w-24 h-1 bg-slate-900" />
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text">
          About me
        </h3>
      </div>
      <div className="w-full max-w-full sm:max-w-5xl flex flex-col md:flex-row mx-auto min-h-[80vh] mt-4">
        <div className="w-full mx-auto md:max-w-[50%] justify-center  items-center p-14  flex space-x-1  ">
          <div className="w-[50%]  flex flex-col justify-end p-2  h-full ">
            <Card className=" relative overflow-hidden border-0 h-56 mb-4  grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top ">
              <Image
                src="/assets/sarath.jpg"
                alt="sarath"
                objectPosition="center"
                objectFit="cover"
                fill
              />
            </Card>
            <Card className="relative overflow-hidden border-0  h-56  grayscale    w-full  ">
              <Image
                src="/assets/sara2.jpg"
                alt="sarath1"
                objectPosition="top"
                objectFit="cover"
                fill
              />
            </Card>
          </div>
          <div className="w-[50%]  flex flex-col justify-start  p-2  h-full ">
            <Card className="grayscale  relative overflow-hidden border-0 h-56 mb-4   w-full">
              <Image
                src="/assets/sara3.jpg"
                alt="sara3"
                objectPosition="center"
                objectFit="cover"
                fill
              />
            </Card>
            <Card className=" relative grayscale overflow-hidden border-0 h-56 mb-4   w-full">
              <Image
                src="/assets/sara4.jpg"
                alt="sara4"
                objectPosition="center"
                objectFit="cover"
                fill
              />
            </Card>
          </div>
        </div>
        <div className="w-full md:w-[50%] p-5  flex items-center justify-center">
          <div className="  mx-auto flex p-2 flex-col gap-14">
            {about.map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-transparent bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text text-center md:text-start">
                  {item.heading}
                </h3>
                <p className="max-w-full text-center md:text-start">
                  {item.desec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
