"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogIn, Menu } from "lucide-react";
import { Button } from "./ui/button";
import resolutLogo from "../public/assets/resolut.svg";
import standardImage from "../public/assets/pci-insight.svg";
import { navItems } from "@/lib/constants";
import WidthConstraint from "./width-constraint";
import Image from "next/image";

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

// HERO SECTION
const Hero = () => {
  return (
    <WidthConstraint>
      <section
        role="banner"
        className=" lg:w-5/6 mx-auto sm:text-center flex flex-col justify-center items-center md:mt-36 sm:mt-32 mt-28 max-[554px]:mt-14 px-3"
      >
        <h1 className="font-canaro-local font-medium leading-[117%] md:text-7xl text-primary-900 sm:text-6xl text-5xl max-[554px]:text-4xl ">
          Empowering Africa with Smart Finance Solutions
        </h1>
        <p className="font-medium text-[32px] leading-[100%] text-primary-black lg:w-11/12 max-[554px]:mt-3 max-[554px]:text-2xl">
          Provide innovative payment, payroll, and lending tools that help
          companies streamline operations, empower employees, and grow
          sustainably.
        </p>
        <div className="flex mt-12 gap-6 max-[554px]:flex-col max-[554px]:w-full max-[554px]:max-w-60">
          <Button className="text-white  font-extrabold leading-[26.7px] text-xl bg-primary-color rounded-[39.42px] px-11 py-5 max-[554px]:p-2.5 max-[554px]:text-lg">
            Explore Our Solutions
          </Button>
          <Button className="text-primary-color font-extrabold leading-[26.7px] text-xl border-[2.63px] border-primary-color rounded-[39.42px] px-11 py-5 min-[554px]:w-64 max-[554px]:p-2 max-[554px]:text-lg  ">
            Get Started
          </Button>
        </div>
        <Link href={""} className="mt-7">
          <Image src={standardImage} alt="Security standards" />
        </Link>
      </section>
      ;
    </WidthConstraint>
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
        <Link href={"#"}>
          <Image
            src={resolutLogo}
            alt="resolut-bussiness-solutions"
            className="scale-80 sm:scale-100 max-[246px]:hidden sm:ml-5 xlg:ml-0"
          ></Image>
        </Link>
        <NavBar />
        <div className="flex gap-4">
          <>
            <Button
              asChild
              className="px-5 hidden lg:flex text-primary-900 shadow-none text-base font-extrabold hover:border-2 hover:rounded-4xl transition-colors duration-300 hover:border-primary-900 hover:bg-background  dark:bg-white"
            >
              <Link href="/sign-up">Login</Link>
            </Button>
            <Button
              asChild
              className="px-7 py-3.5 hidden lg:flex bg-black-100 text-primary-900 font-extrabold rounded-4xl mr-2 hover:right-2 hover:rounded-4xl transition-all duration-700 hover:bg-blue-200 hover:text-whit"
            >
              <Link href="/sign-in">Get Started</Link>
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
      <Hero />
    </header>
  );
};

export default Header;
