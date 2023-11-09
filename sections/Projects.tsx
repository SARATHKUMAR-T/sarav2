/* eslint-disable react/no-unescaped-entities */
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
        <h4 className="text-3xl text-transparent font-bold bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text mt-4">
          Unique ideas-Unique Projects!
        </h4>
        <p className="max-w-xl mt-4">
          Explore my portfolio's dynamic landscape, showcasing a series of
          distinctive full-stack MERN projects. Leveraging cutting-edge
          technologies including Next.js, Shadcn, and Tailwind CSS, each
          creation reflects a harmonious blend of innovation and functionality.
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
