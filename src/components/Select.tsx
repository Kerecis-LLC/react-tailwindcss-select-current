import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { COLORS, DEFAULT_THEME, THEME_DATA } from "../constants";
import useOnClickOutside from "../hooks/use-onclick-outside";

import { CloseIcon } from "./Icons";
import Options from "./Options";
import SearchInput from "./SearchInput";
import SelectProvider from "./SelectProvider";
import Spinner from "./Spinner";
import { GroupOption, Option, Options as ListOption } from "./type";

interface SelectProps {
    options: ListOption;
    value: Option | Option[] | null;
    onChange: (value?: Option | Option[] | null) => void;
    placeholder?: string;
    isMultiple?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    loading?: boolean;
    menuIsOpen?: boolean;
    searchInputPlaceholder?: string;
    noOptionsMessage?: string;
    primaryColor: string;
    formatGroupLabel?: ((data: GroupOption) => JSX.Element) | null;
    formatOptionLabel?: ((data: Option) => JSX.Element) | null;
    classNames?: {
        menuButton?: ({ isDisabled }: { isDisabled: boolean }) => string;
        menu?: string;
        tagItem?: ({ isDisabled }: { isDisabled: boolean }) => string;
        tagItemText?: string;
        tagItemIconContainer?: string;
        tagItemIcon?: string;
        list?: string;
        listGroupLabel?: string;
        listItem?: ({ isSelected }: { isSelected: boolean }) => string;
        listDisabledItem?: string;
        ChevronIcon?: ({ open }: { open: boolean }) => string;
        searchContainer?: string;
        searchBox?: string;
        searchIcon?: string;
        closeIcon?: string;
    };
}

const Select: React.FC<SelectProps> = ({
    options = [],
    value = null,
    onChange,
    placeholder = "Select...",
    searchInputPlaceholder = "Search...",
    isMultiple = false,
    isClearable = false,
    isSearchable = false,
    isDisabled = false,
    loading = false,
    menuIsOpen = false,
    noOptionsMessage = "No options found",
    primaryColor = DEFAULT_THEME,
    formatGroupLabel = null,
    formatOptionLabel = null,
    classNames
}) => {
    const [open, setOpen] = useState<boolean>(menuIsOpen);
    const [list, setList] = useState<ListOption>(options);
    const [inputValue, setInputValue] = useState<string>("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const formatItem = (item: Option) => {
            if ("disabled" in item) return item;
            return {
                ...item,
                disabled: false
            };
        };

        setList(
            options.map(item => {
                if ("options" in item) {
                    return {
                        label: item.label,
                        options: item.options.map(formatItem)
                    };
                } else {
                    return formatItem(item);
                }
            })
        );
    }, [options]);

    const toggle = useCallback(() => {
        if (!isDisabled) {
            setOpen(!open);
        }
    }, [isDisabled, open]);

    const closeDropDown = useCallback(() => {
        if (open) setOpen(false);
    }, [open]);

    useOnClickOutside(ref, () => {
        closeDropDown();
    });

    const onPressEnterOrSpace = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            e.preventDefault();
            if ((e.code === "Enter" || e.code === "Space") && !isDisabled) {
                toggle();
            }
        },
        [isDisabled, toggle]
    );

    const handleValueChange = useCallback(
        (selected: Option) => {
            function update() {
                if (!isMultiple && !Array.isArray(value)) {
                    closeDropDown();
                    onChange(selected);
                }

                if (isMultiple && (Array.isArray(value) || value === null)) {
                    onChange(value === null ? [selected] : [...value, selected]);
                }
            }

            if (selected !== value) {
                update();
            }
        },
        [closeDropDown, isMultiple, onChange, value]
    );

    const clearValue = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            onChange(null);
        },
        [onChange]
    );

    const removeItem = useCallback(
        (e: React.MouseEvent<HTMLDivElement>, item: Option) => {
            if (isMultiple && Array.isArray(value) && value.length) {
                e.stopPropagation();
                const result = value.filter(current => item.value !== current.value);
                onChange(result.length ? result : null);
            }
        },
        [isMultiple, onChange, value]
    );

    const getSelectClass = useCallback(() => {
        let ringColor = THEME_DATA.ring[DEFAULT_THEME];
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ringColor = THEME_DATA.ring[primaryColor];
        }

        let borderFocus = THEME_DATA.borderFocus[DEFAULT_THEME];
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            borderFocus = THEME_DATA.borderFocus[primaryColor];
        }
        const baseClass =
            "flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none";
        const defaultClass = `${baseClass} ${
            isDisabled
                ? "bg-gray-200"
                : `bg-white hover:border-gray-400 ${borderFocus} focus:ring ${ringColor}`
        }`;

        return classNames && classNames.menuButton
            ? classNames.menuButton({ isDisabled })
            : defaultClass;
    }, [classNames, isDisabled, primaryColor]);

    const getTagItemClass = useCallback(() => {
        const baseClasse = "flex space-x-1";
        const disabledClass = isDisabled ? "border-gray-500 px-1" : "pl-1";
        return classNames && classNames.tagItem
            ? classNames.tagItem({ isDisabled })
            : `${baseClasse} ${disabledClass}`;
    }, [classNames, isDisabled]);

    return (
        <SelectProvider
            otherData={{
                formatGroupLabel,
                formatOptionLabel,
                classNames
            }}
            value={value}
            handleValueChange={handleValueChange}
        >
            <div className="relative w-full mt-1" ref={ref}>
                <div
                    tabIndex={0}
                    aria-expanded={open}
                    onKeyDown={onPressEnterOrSpace}
                    onClick={toggle}
                    className="bg-white cursor-default rounded-lg text-left border outline-16 border-lightGreen px-3 placeholder-primary-500 shadow-sm focus:border-lightGreen focus:outline-none focus:ring-primary-500 sm:text-sm flex"
                >
                    <div className="grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1 w-1/2">
                        {!isMultiple ? (
                            <p className="truncate cursor-default select-none">
                                {value && !Array.isArray(value) ? value.label : placeholder}
                            </p>
                        ) : (
                            <>
                                {value === null && placeholder}

                                {Array.isArray(value) &&
                                    value.map((item, index) => (
                                        <div className={getTagItemClass()} key={index}>
                                            <p
                                                className={
                                                    classNames && classNames.tagItemText
                                                        ? classNames.tagItemText
                                                        : "text-gray-600 truncate cursor-default select-none"
                                                }
                                            >
                                                {item.label}
                                            </p>
                                            {!isDisabled && (
                                                <div
                                                    onClick={e => removeItem(e, item)}
                                                    className={
                                                        classNames &&
                                                        classNames.tagItemIconContainer
                                                            ? classNames.tagItemIconContainer
                                                            : "flex items-center px-1 cursor-pointer rounded-r-sm hover:bg-secondary-200 hover:text-secondary-600"
                                                    }
                                                >
                                                    <CloseIcon
                                                        className={
                                                            classNames && classNames.tagItemIcon
                                                                ? classNames.tagItemIcon
                                                                : "w-3 h-3 mt-0.5"
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </>
                        )}
                    </div>

                    <div className="flex flex-none items-center py-2">
                        {loading && (
                            <div className="px-1.5">
                                <Spinner primaryColor={primaryColor} />
                            </div>
                        )}

                        {isClearable && !isDisabled && value !== null && (
                            <div className="px-1.5 cursor-pointer" onClick={clearValue}>
                                <CloseIcon
                                    className={
                                        classNames && classNames.closeIcon
                                            ? classNames.closeIcon
                                            : "w-5 h-5 p-0.5"
                                    }
                                />
                            </div>
                        )}

                        <div className="h-full">
                            <span className="w-px h-full inline-block text-white bg-gray-300 text-opacity-0" />
                        </div>

                        <div className="px-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>

                {open && !isDisabled && (
                    <div
                        tabIndex={-1}
                        className={
                            classNames && classNames.menu
                                ? classNames.menu
                                : "absolute z-20 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700"
                        }
                    >
                        {isSearchable && (
                            <SearchInput
                                value={inputValue}
                                placeholder={searchInputPlaceholder}
                                onChange={e => setInputValue(e.target.value)}
                            />
                        )}

                        <Options
                            list={list}
                            noOptionsMessage={noOptionsMessage}
                            text={inputValue}
                            isMultiple={isMultiple}
                            value={value}
                            primaryColor={primaryColor || DEFAULT_THEME}
                        />
                    </div>
                )}
            </div>
        </SelectProvider>
    );
};

export default Select;
