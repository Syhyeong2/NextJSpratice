"use client";

import { useRouter } from "next/navigation";

export default function Books({ list_name, list_name_encoded }: any) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/list/${list_name_encoded}`);
  };
  return (
    <div
      key={list_name_encoded}
      className="border-2 border-orange-600 p-4 mt-4 rounded-md transform transition duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="text-orange-500">{list_name}</div>
    </div>
  );
}
