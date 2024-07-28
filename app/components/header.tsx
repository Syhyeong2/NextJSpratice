"use client";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const onClickHome = () => {
    router.push(`/`);
  };
  const onClickAbout = () => {
    router.push(`/about`);
  };
  return (
    <div className="w-full bg-gray-200 h-20 fixed z-10 flex justify-between items-center">
      <div onClick={onClickHome} className="m-5 border-4 border-blue-500 p-1">
        home
      </div>
      <div onClick={onClickAbout} className="m-5 border-4 border-blue-500 p-1">
        about
      </div>
    </div>
  );
}
