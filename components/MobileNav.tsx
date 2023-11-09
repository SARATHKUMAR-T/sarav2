import { Home, Webhook } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ToggleButton";

const routes = [
  {
    label: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    label: "Skills",
    link: "#skills",
    icon: <Home />,
  },
  {
    label: "Projects",
    link: "#projects",
    icon: <Home />,
  },
];

export default function MobileNav() {
  return (
    <nav className="flex sm:hidden justify-between p-4 px-6 fixed bottom-2 w-[90%] mx-auto rounded-full left-0 right-0 z-50 h-[8vh] bg-black dark:bg-[#E0EAFC] dark:text-black text-white items-center">
      {routes.map((item, i) => (
        <Link key={i} href={item.link} className="flex flex-col items-center">
          {item.icon}
          <p className="text-xs">{item.label}</p>
        </Link>
      ))}
      <Link
        target="_blank"
        rel="noreferror"
        href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view?usp=sharing"
        className="flex flex-col items-center"
      >
        <Webhook />
        <p className="text-xs">Resume</p>
      </Link>
      <ModeToggle />
    </nav>
  );
}
