"use client";

import Image from "next/image";
import Trash from "@/../public/assets/trash.png";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/config/config";

const deleteButton = ({ productId }) => {
  const router = useRouter();
   

  const handleDelete = async () => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };

    fetch(`${apiUrl}/products/${productId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        router.refresh();
      })
      .catch((error) => console.error(error));
  };

  return (
    <button
      className="bg-zinc-300 rounded-full p-2"
      onClick={handleDelete}
    >
      <Image src={Trash} alt="delete" />
    </button>
  );
};

export default deleteButton;