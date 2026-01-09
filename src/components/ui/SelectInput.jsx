"use client";

const SelectInput = ({ label, name, value, onChange, options = [], required = false }) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-sm font-semibold text-black">{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border p-2 rounded-lg border-black"
      >
        <option value="">-- Select --</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
