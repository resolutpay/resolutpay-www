import Image from "next/image";
import Link from "next/link";
import resolutLogo from "@/assets/resolut.svg?url";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={resolutLogo}
        width={150}
        height={60}
        alt="resolut-bussiness-solutions"
      />
    </Link>
  );
};

export default Logo;
