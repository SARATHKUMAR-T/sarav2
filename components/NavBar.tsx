"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowBigDown, Webhook } from "lucide-react";
import { ModeToggle } from "./ToggleButton";
import { motion as m } from "framer-motion";

const homeRoutes = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function NavBar() {
  return (
    <m.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "backInOut" },
      }}
      className="hidden sm:flex fixed  bg-opacity-50 bg-transparent backdrop-blur-lg z-50 top-0  left-0 h-16 pb-2 right-0  items-end justify-between px-4 md:px-10"
    >
      <Button
        asChild
        variant="link"
        className="hidden md:inline-block text-xl text-inherit"
      >
        <Link href="#home">Sarath.dev</Link>
      </Button>
      <ul>
        <li className="space-x-2 md:space-x-5">
          {homeRoutes.map(route => (
            <Button
              variant="link"
              className="dark:text-slate-100"
              key={route.label}
              asChild
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
        </li>
      </ul>
      <div className="space-x-1 md:space-x-3 flex items-center">
        <ModeToggle />
        <Button className="text-inherit " variant="link" asChild>
          <Link
            target="_blank"
            rel="noreferror"
            href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view?usp=sharing"
          >
            My Resume
            <Webhook className="ml-1 hover:animate-spin" />
          </Link>
        </Button>
        <Button variant="outline">
          <Link href="#contact">Hire Me</Link>
        </Button>
      </div>
    </m.nav>
  );
}

export default NavBar;
