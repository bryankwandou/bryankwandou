"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm text-paper transition-colors duration-300 hover:border-ember hover:text-ember"
    >
      <Printer size={14} className="transition-transform duration-300 group-hover:-translate-y-px" />
      Print or save as PDF
    </button>
  );
}