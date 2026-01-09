"use client";

import Image from "next/image";
import Pen from "@/../public/assets/pen.png";
import { useRouter } from "next/navigation";

const EditButton = ({ productId }) => {
  const router = useRouter();

  return (
    <button
      className="bg-zinc-300 rounded-full p-2"
      onClick={() => router.push(`/products/${productId}/edit`)}
    >
      <Image src={Pen} alt="edit" />
    </button>
  );
};

export default EditButton;