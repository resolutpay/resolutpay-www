import React from "react";
import WidthConstraint from "./width-constraint";
import Image from "next/image";
import resolutLogo from "../public/assets/resolut.svg";
import Link from "next/link";
import instagram from "../public/assets/icons/instagram.svg";
import linkedIn from "../public/assets/icons/linkedin.svg";
import x from "../public/assets/icons/x.svg";
import meta from "../public/assets/icons/meta.svg";
import { AtSign, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: instagram, label: "Instagram" },
    { icon: linkedIn, label: "LinkedIn" },
    { icon: x, label: "X/Twitter" },
    { icon: meta, label: "Meta/Facebook" },
  ];
  return (
    <footer>
      {/* Grid Layout Container - 3 Columns*/}
      <WidthConstraint className="px-5 grid grid-cols-1  sm:grid-cols-3 gap-[74px] justify-center">
        {/* Column 1 */}
        <div className="w-full">
          <Image src={resolutLogo} alt="Resolut Business Solutions" />
        </div>

        {/* Column 2 */}
        <div>
          {/* Row 1 */}
          <div className="text-primary-900 mb-[74px]">
            <p className="font-bold text-[20px] leading-[24.2px] ">
              Opening Hours
            </p>
            <p className="font-semibold text-2xl leading-[27.7px] mt-4">
              Mon - Fri 9:00 - 17:00
            </p>
            <p className="font-semibold text-2xl leading-[27.7px] mt-4">
              Sunday - CLOSED
            </p>
          </div>
          {/* Row 2 */}
          <div className="text-primary-900">
            <p className="font-bold text-[20px] leading-[24.2px] ">Contact</p>
            <div className="flex gap-3 mt-4">
              <Phone color="#063972" className="mt-0.5  min-w-7" />
              <p className="font-semibold text-2xl leading-[27.7px]">
                +233 59 664 3600
              </p>
            </div>
            <div className="flex mt-4 gap-3">
              <Mail color="#063972" className="mt-1 min-w-7" />
              <p className="font-semibold text-2xl leading-[27.7px] ">
                Weija Bortianor, Plot No. 7b Cluster 6 Dunkunah <span></span>
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <AtSign color="#063972" className="mt-1  min-[273px]:min-w-7" />
              <Link
                href={""}
                className="font-semibold text-2xl leading-[27.7px]"
              >
                hi@resolutfinance.com
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          {/* Row 1 */}
          <div className="text-primary-900 mb-[74px]">
            <p className="font-bold text-[20px] leading-[24.2px] ">Locations</p>
            <p className="font-semibold text-2xl leading-[27.7px] mt-4">
              Weija Bortianor, Plot No. 7b Cluster 6 Dunkunah
            </p>
          </div>
          {/* Row 2 */}
          <div className="text-primary-900">
            <p className="font-medium text-2xl leading-[24.2px] mb-5">
              Visit Our Socials
            </p>
            <div className="flex gap-2.5">
              {socials.map((social, index) => {
                return (
                  <Link href={""} key={index}>
                    <Image
                      src={social.icon}
                      alt={social.label}
                      className="scale-75 sm:scale-100"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </WidthConstraint>
      <WidthConstraint className="mt-28 pb-52 px-5">
        <p className="font-auxilary text-sm leading-[21px] text-primary-900 text-center">
          &copy; {new Date().getFullYear()} Resolut Business Solutions All
          Rights Reserved
        </p>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
