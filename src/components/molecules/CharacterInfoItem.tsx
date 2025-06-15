import React from "react";
import Typography from "../atoms/Typography/Typography";
import type { Option } from "../../models/option.model";

const CharacterInfoItem: React.FC<Option> = ({ label, value }) => (
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