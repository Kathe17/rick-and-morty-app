
import React from "react";
import type { PoppupProps } from "./models/poppup.model";

const Poppup: React.FC<PoppupProps> = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-0 z-20 w-full h-[75vh] bg-white rounded-md shadow-lg">
      {children}
    </div>
  );
};

export default Poppup;