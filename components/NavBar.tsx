import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowBigDown, Webhook } from "lucide-react";
import { ModeToggle } from "./ToggleButton";

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
    <nav className="fixed z-50 top-0 pt-5 left-0 h-16  right-0 flex items-center justify-between px-10">
      <Button asChild variant="link" className="text-xl text-inherit">
        <Link href="#home">Sarath.dev</Link>
      </Button>
      <p></p>
      <ul>
        <li className=" space-x-5">
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
      <div className="space-x-3 flex items-center">
        <ModeToggle />
        <Button className="text-inherit" variant="link" asChild>
          <Link href="">
            My Resume
            <Webhook className="ml-1 " />
          </Link>
        </Button>
        <Button variant="outline">Hire Me</Button>
      </div>
    </nav>
  );
}

export default NavBar;
