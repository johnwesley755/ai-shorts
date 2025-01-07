import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section: Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src="/login.jpg"
          alt="Login"
          layout="intrinsic"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Section: Sign-In */}
      <div className="flex justify-center items-center bg-white">
        <SignIn />
      </div>
    </div>
  );
}
