"use client";

const TextArea = ({label, name, value, onChange, placeholder = "",required = false, rows = 6}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && (
        <label className="text-sm font-semibold text-black">
          {label}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="border p-3 rounded-lg border-black resize-none"
      />
    </div>
  );
};

export default TextArea;
