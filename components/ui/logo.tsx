import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/assets/resolut.svg"}
        width={180}
        height={60}
        alt="Resolut Business Solutions"
      />
    </Link>
  );
};

export default Logo;
