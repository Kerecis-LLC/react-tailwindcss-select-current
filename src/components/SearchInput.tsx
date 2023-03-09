import React, { useContext } from "react";

import { SelectContext } from "./SelectProvider";

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = "",
    value = "",
    onChange,
    name = ""
}) => {
    const { classNames } = useContext(SelectContext);
    return (
        <div
            className={
                classNames && classNames.searchContainer
                    ? classNames.searchContainer
                    : "relative py-1 px-2.5"
            }
        >
            <input
                className={
                    "w-full py-2 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none focus:outline-none focus:border-primary-700 focus:outline-none focus:ring-primary-50"
                }
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default SearchInput;
