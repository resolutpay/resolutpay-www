import { AtSign, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "../lib/constants";
import WidthConstraint from "./width-constraint";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Grid Layout Container - 3 Columns*/}
      <WidthConstraint className="grid grid-cols-1 sm:grid-cols-3 gap-20 justify-center">
        {/* Column 1 */}
        <div className="w-full">
          <Link href={"/"}>
            <Image
              src="/assets/resolut.svg"
              alt="Resolut Business Solutions"
              width={150}
              height={50}
            />
          </Link>
        </div>

        {/* Column 2 */}
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="text-primary-900">
            <p className="font-bold text-[20px] ">Opening Hours</p>
            <p className="font-semibold text-xl">Mon - Fri 9:00 - 17:00</p>
            <p className="font-semibold text-xl">Sunday - CLOSED</p>
          </div>
          {/* Row 2 */}
          <div className="text-primary-900 space-y-2">
            <p className="font-bold text-[20px] ">Contact</p>
            <div className="flex gap-3 items-center">
              <Phone color="#063972" size={20} />
              <p className="font-semibold text-xl">+233 59 664 3600</p>
            </div>
            <div className="flex gap-3 items-center">
              <Mail color="#063972" size={20} />
              <p className="font-semibold text-xl ">
                Weija Bortianor, Plot No. 7b Cluster 6 Dunkunah <span></span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <AtSign color="#063972" size={20} />
              <Link
                href={""}
                className="font-semibold text-xl hover:underline max-[273px]:text-lg"
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
            <p className="font-bold text-[20px]">Locations</p>
            <p className="font-semibold text-xl">
              Weija Bortianor, Plot No. 7b Cluster 6 Dunkunah
            </p>
          </div>
          {/* Row 2 */}
          <div className="text-primary-900 space-y-5">
            <p className="font-medium text-2xl">Visit Our Socials</p>
            <div className="flex gap-2">
              {socials.map((social, index) => {
                return (
                  <Link href={""} key={index}>
                    <Image
                      src={social.icon}
                      alt={social.label}
                      className="scale-75 sm:scale-100 hover:drop-shadow-xl drop-shadow-black hover:scale-105 transition-all transform duration-500 ease-initial"
                      width={40}
                      height={40}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </WidthConstraint>

      <WidthConstraint className="mt-12 px-5 pb-10">
        <p className="text-primary-900 text-center">
          &copy; {new Date().getFullYear()} Resolut Business Solutions All Rights Reserved
        </p>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
