import React, { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import type { BottomSheetProps } from "./models/bottomSheet.model";

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onClose, children, title }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-40 flex items-end md:hidden bg-gray-900/90">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/5 bg-opacity-30 transition-opacity"
                onClick={onClose}
                aria-label="Cerrar filtros"
            />
            {/* Sheet */}
            <div className="relative w-full h-full rounded-t-2xl bg-white shadow-xl max-h-[95vh] flex flex-col animate-slideUp">
                <div className="flex items-center px-4 pt-4 pb-2 border-b border-gray-100">
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary-50 transition-colors"
                        aria-label="Cerrar filtros"
                    >
                        <IoArrowBackOutline className="text-primary-600" size={24} />
                    </button>
                    {title && (
                        <span className="ml-2 text-lg font-semibold text-gray-900">{title}</span>
                    )}
                </div>
                <div className="flex-1 overflow-y-auto p-4">{children}</div>
            </div>
        </div>
    );
};

export default BottomSheet;
