import React from "react";

export default function Layout({ children, bgColor }) {
  return (
    <div
      className={`bg-[#adeade]/70 h-auto max-w-4xl mx-auto p-10 text-center`}
    >
      {children}
    </div>
  );
}
