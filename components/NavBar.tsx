import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <nav className="fixed top-0 pt-5 left-0 h-16  right-0 flex items-center justify-between px-10">
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
        <Button variant="link">Login</Button>
        <Button variant="outline">Signup</Button>
      </div>
    </nav>
  );
}

export default NavBar;
