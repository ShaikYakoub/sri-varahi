"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  value: number | string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: number | string;
  onChange: (value: number | string) => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  label,
  className = "",
  disabled = false,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`relative ${className}`.trim()}>
      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <button
        ref={buttonRef}
        type="button"
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium flex justify-between items-center focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none transition-all ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected ? selected.label : "Select..."}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul
          ref={listRef}
          className="absolute z-20 mt-2 w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto animate-fade-in"
          tabIndex={-1}
          role="listbox"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-amber-500/10 ${value === opt.value ? "bg-blue-100 dark:bg-amber-500/20 font-semibold" : ""}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              role="option"
              aria-selected={value === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
