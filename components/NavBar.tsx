import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowBigDown, Webhook } from "lucide-react";

const homeRoutes = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function NavBar() {
  return (
    <nav className="fixed z-50 top-0 pt-5 left-0 h-16  right-0 flex items-center justify-between px-10">
      <Button asChild variant="link" className="text-xl">
        <Link href="#home">Quotes.io</Link>
      </Button>
      <p></p>
      <ul className="">
        <li className=" space-x-5">
          {homeRoutes.map(route => (
            <Button variant="link" key={route.label} asChild>
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
        </li>
      </ul>
      <div className="space-x-3">
        <Button variant="link" asChild>
          <Link href="">
            My Resume
            <Webhook className="ml-1" />
          </Link>
        </Button>
        <Button variant="outline">Hire Me</Button>
      </div>
    </nav>
  );
}

export default NavBar;
