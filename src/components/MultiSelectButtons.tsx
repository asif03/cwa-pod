import React from "react";

interface MultiSelectButtonsProps {
  options: string[];
  selected: string[];
  onSelectionChange: (selectedItems: string[]) => void;
}

const MultiSelectButtons: React.FC<MultiSelectButtonsProps> = ({
  options,
  selected,
  onSelectionChange,
}) => {
  const toggleSelection = (value: string) => {
    const newSelection = selected.includes(value)
      ? selected.filter((item) => item !== value) // Remove if already selected
      : [...selected, value]; // Add if not selected

    onSelectionChange(newSelection); // Notify Parent
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => toggleSelection(option)}
          className={`font-inter rounded-lg border px-4 py-2 text-sm font-normal text-black transition-all ${
            selected.includes(option)
              ? "ring-primary bg-white ring-1"
              : "hover:ring-primary bg-white ring-1 ring-[#DEE1E8]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default MultiSelectButtons;
