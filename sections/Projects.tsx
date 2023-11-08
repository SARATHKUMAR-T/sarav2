import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 w-full px-4">
      <div className="max-w-5xl  mx-auto">
        <h4 className="text-2xl font-bold mt-4">Unique ideas-unique works!</h4>
        <p className="max-w-xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam
          recusandae voluptas officia sequi explicabo adipisci ratione culpa
          commodi soluta?
        </p>
        <div className="space-y-36">
          {projects.map((projects, i) => (
            <ProjectCard key={i} projects={projects} />
          ))}
        </div>
      </div>
    </section>
  );
}
