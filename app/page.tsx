import Image from "next/image";
import { Faq } from "./faq/Faq";

export default function Home() {
  return (
    <div className="w-screen h-screen grid grid-rows-5">
      <div className="row-span-2 w-full h-full relative">
        <Image
          alt="Background Image"
          src="./background-desktop.svg"
          fill={true}
          className="object-cover"
        ></Image>
      </div>
      <div className="row-span-3 w-full h-full bg-bgPrimary"></div>
      <div className="absolute left-1/10 md:left-3/10  top-1/5 h-13/20 w-4/5 md:w-2/5  bg-white rounded-xl shadow-lg py-12 px-10 ">
        {" "}
        <Faq />
      </div>
    </div>
  );
}
