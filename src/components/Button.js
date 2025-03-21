import React from "react";

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700">
      {children}
    </button>
  );
}
