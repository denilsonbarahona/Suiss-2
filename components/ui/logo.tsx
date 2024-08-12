import Link from "next/link";
import SuissLogo from "@/components/assets/images/SuissLogo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="block" href="/">
      <Image src={SuissLogo} width={126} height={60} alt="Suiss Logo" />
    </Link>
  );
}
