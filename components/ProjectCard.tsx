import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

export default function ProjectCard({ projects }: any) {
  return (
    <div className="flex flex-col gap-y-4 gap-x-12 sm:flex-row mt-12">
      <Card className="relative flex-1 w-full min-h-[22rem] bg-green-600">
        <Card className=" relative flex-1 w-full min-h-[22rem]   overflow-hidden">
          <Image
            fill
            objectPosition="center"
            objectFit="cover"
            src={projects.image}
            alt="glboill"
          />
        </Card>
      </Card>
      <div className="flex-1 flex items-center">
        <div>
          <Button variant="default" asChild>
            <Link target="_blank" rel="noreferror" href={projects.live}>
              visit live website
              <ExternalLink className="ml-2" />
            </Link>
          </Button>
          <h3 className="mt-6 text-3xl font-bold tracking-wide">
            {projects.title}
          </h3>
          <p className="mt-3 text-sm">{projects.desec}</p>
          <div className="flex mt-8 items-center gap-2">
            {projects.tech.map((tech: string, i: number) => (
              <div className="flex gap-2 items-center" key={i}>
                <p>{tech}</p>
                <div className="h-4 w-1 bg-blue-600" />
              </div>
            ))}
          </div>
          <div className="flex flex-col  sm:flex-row gap-2 mt-6">
            <Button variant="outline" asChild>
              <Link target="_blank" rel="noreferror" href={projects.frontend}>
                Frontend code
                <ExternalLink className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link target="_blank" rel="noreferror" href={projects.backend}>
                Backend code
                <ExternalLink className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
