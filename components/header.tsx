"use client";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Logo from "./ui/logo";
import WidthConstraint from "./width-constraint";

// NAVIGATION MENU MOBILE
const MobileMenu = ({ check }: { check: boolean; isScrolled: boolean }) => {
  return (
    <div className={`rounded-b-4xl ${check ? "border-b-2 shadow" : ""} pl-5`}>
      <WidthConstraint className={cn(`${check ? "pb-5" : ""} w-full `)}>
        <AnimatePresence>
          {check && (
            <motion.nav
              key="nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={"lg:hidden"}
            >
              <ul className="flex flex-col gap-4 py-4">
                {navItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="border-b w-full first:pt-4 last:border-none pb-4"
                    >
                      <Button
                        asChild
                        variant="link"
                        className=" text-start p-0 no-underline border-none flex items-start justify-start font-bold text-primary-900"
                      >
                        <Link
                          href={item.path}
                          className="w-full font-bold text-primary-900"
                        >
                          {item.title}
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between w-3/4 mx-auto">
                <Button
                  className="text-primary-900 shadow-none text-base font-extrabold"
                  asChild
                >
                  <Link href="/sign-in">
                    Login <LogIn className="mt-0.5 size-3.5" />
                  </Link>
                </Button>
                <Button
                  className="text-primary-900 shadow-none text-base font-extrabold rounded-2xl border-2 p-1 px-2 bg-black-100"
                  asChild
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </WidthConstraint>
    </div>
  );
};

// NAVIGATION MENU DESKTOP
const NavBar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-10 font-bold text-primary-900">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className="hover:font-extrabold">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// COMBINED HEADER
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [check, setCheck] = useState(false);
  const navRef = useRef<HTMLHeadingElement | null>(null);
  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setCheck(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY !== 0) {
        setCheck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCheck(false);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 z-[20] w-screen overflow-clip pt-5 md:pt-6 ${
        isScrolled || check ? "bg-white dark:bg-black" : ""
      }`}
    >
      <WidthConstraint className="flex gap-10 justify-between items-center h-full">
        <Logo />
        <NavBar />
        <div className="flex gap-4 pb-2">
          <>
            {/* Sign In Button */}
            <Button
              asChild
              className="px-5 hidden lg:flex shadow-none text-base font-extrabold"
            >
              <Link
                href="/sign-in"
                className="relative overflow-hidden text-primary-900 border-2 border-transparent rounded-lg group transition-all duration-300 hover:rounded-4xl hover:border-primary-900 dark:bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-primary-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="text-primary-900 font-extrabold relative z-10 group-hover:text-white transition-colors duration-500 ease-initial">
                  Login
                </span>
              </Link>
            </Button>

            {/* SignUP Button */}
            <Button
              asChild
              className="px-7 py-3.5 hidden lg:flex bg-black-100 text-primary-900 font-extrabold rounded-4xl mr-2 hover:right-2 hover:rounded-4xl transition-all duration-700 hover:bg-primary-color hover:text-white hover:animate-bounce"
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </>
          <Menu
            size={30}
            onClick={() => setCheck(!check)}
            className={"flex lg:hidden text-primary-900 mr-3"}
          />
        </div>
      </WidthConstraint>
      <MobileMenu check={check} isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
