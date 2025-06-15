import type { Option } from "../../../../models/option.model";

export interface FilterSectionProps {
    title?: string;
    filters: Option[];
    selected: string;
    onChange: (value: string) => void;
}
