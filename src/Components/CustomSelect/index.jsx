import { useEffect, useRef, useState } from "react";
import "./select.scss";
import { ArrowDownIcon } from "lucide-react";
const CustomSelect = ({ options, placeholder, name }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef();

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div ref={ref} className="select">
      <div className="relative">
        <button id="projectType" type="button" onClick={() => setOpen(!open)}>
          <span>{selected ? selected.label : placeholder}</span>
          <ArrowDownIcon
            size={20}
            className={`opacity-70 transition-all ${open ? "rotate-180" : ""} text-[#D4AF37] cursor-pointer hover:scale-120`}
          />
        </button>

        <ul
          className={`${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          {options.map((option) => (
            <li key={options.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      <input type="hidden" name={name} value={selected ? selected.value : ""} />
    </div>
  );
};

export default CustomSelect;
