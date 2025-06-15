import React from "react";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

type Option = {
    label: string;
    value: string;
};

interface FilterSectionProps {
    title?: string;
    filters: Option[];
    selected: string;
    onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, filters, selected, onChange }: FilterSectionProps) => {
    return (
        <div className="flex flex-col items-start gap-y-2">
            <Typography
                variant="p"
                size="sm"
                color="text-cool-gray-500"
            >
                {title}
            </Typography>
            <div className="w-full grid grid-cols-3 gap-2">
                {filters.map((filter) => (
                    <Button
                        key={filter.value}
                        selected={selected === filter.value}
                        onClick={() => onChange(filter.value)}
                        padding="py-4.5"
                        text={filter.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterSection;