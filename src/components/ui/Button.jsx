"use client";

const AppButton = ({ label, type, onClick }) => {
  let colorClass = "";

  if (type === "delete") colorClass = "bg-red-500 hover:bg-red-600 w-full text-white";
  if (type === "edit") colorClass = "bg-blue-500 hover:bg-blue-600 w-full text-white";
  if (type === "save") colorClass = "bg-green-500 hover:bg-green-600 w-full text-white";
  if (type === "publish") colorClass = "bg-black  hover:bg-zinc-800 transition w-full text-white";
  if (type === "create") colorClass = "bg-yellow-400 hover:bg-yellow-500 w-full text-black";

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-xl font-semibold shadow transition ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default AppButton;
