import React from "react";

export default function Title({ title }) {
  if (isBlue) {
    return <h1 className="text-blue-700 text-3xl font-bold">{title}</h1>;
  }

  return <h1 className="text-red-700 text-3xl font-bold">{title}</h1>;
}
