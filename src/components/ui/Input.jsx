"use client";

const Input = ({label, name, type = "text", value, onChange, placeholder, required = false, accept, hidden = false}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-sm font-semibold text-black">{label}</label>}

      <input
        type={type}
        name={name}
        value={type !== "file" ? value : undefined}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        accept={accept}
        className="border p-2 rounded-lg border-black text-gray"
        hidden={hidden}
      />
    </div>
  );
};

export default Input;
