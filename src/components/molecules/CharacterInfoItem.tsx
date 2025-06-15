import React from "react";
import Typography from "../atoms/Typography";

interface CharacterInfoItemProps {
    label: string;
    value: string;
}

const CharacterInfoItem: React.FC<CharacterInfoItemProps> = ({ label, value }) => (
    <div className="flex flex-col items-start border-b border-primary-100 py-4 pr-6">
        <Typography variant="p" size="base" color="text-gray-900" weight="semibold">
            {label}
        </Typography>
        <Typography variant="p" size="base" color="text-cool-gray-500">
            {value}
        </Typography>
    </div>
);

export default CharacterInfoItem;