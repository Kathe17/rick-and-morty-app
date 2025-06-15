
import React from "react";

interface PoppupProps {
  open: boolean;
  children: React.ReactNode;
}

const Poppup: React.FC<PoppupProps> = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-0 z-20 w-full bg-white rounded-md shadow-lg">
      {children}
    </div>
  );
};

export default Poppup;