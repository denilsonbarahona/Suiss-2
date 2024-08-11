import Image from "next/image";
import SignIn from "@/components/assets/images/SignIn.svg";

export default function AuthImage() {
  return (
    <div
      className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
      aria-hidden="true"
    >
      <Image
        className="object-cover object-center w-full h-full"
        src={SignIn}
        priority
        width={760}
        height={1024}
        alt="Authentication"
      />
    </div>
  );
}
