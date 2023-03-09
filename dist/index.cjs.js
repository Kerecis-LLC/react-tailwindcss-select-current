'use strict';

var require$$0 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

const COLORS = [
    "primary",
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "violet",
    "indigo",
    "purple",
    "fuchsia",
    "pink",
    "rose"
];
const DEFAULT_THEME = "primary";
const THEME_DATA = {
    bg: {
        primary: "bg-primary-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        amber: "bg-amber-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-emerald-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500"
    },
    bgHover: {
        primary: "hover:bg-primary-100",
        blue: "hover:bg-blue-100",
        orange: "hover:bg-orange-100",
        yellow: "hover:bg-yellow-100",
        red: "hover:bg-red-100",
        purple: "hover:bg-purple-100",
        amber: "hover:bg-amber-100",
        lime: "hover:bg-lime-100",
        green: "hover:bg-green-100",
        emerald: "hover:bg-emerald-100",
        teal: "hover:bg-teal-100",
        cyan: "hover:bg-cyan-100",
        sky: "hover:bg-sky-100",
        indigo: "hover:bg-indigo-100",
        violet: "hover:bg-violet-100",
        fuchsia: "hover:bg-fuchsia-100",
        pink: "hover:bg-pink-100",
        rose: "hover:bg-rose-100"
    },
    ring: {
        primary: "focus:ring-primary-500/20",
        blue: "focus:ring-blue-500/20",
        orange: "focus:ring-orange-500/20",
        yellow: "focus:ring-yellow-500/20",
        red: "focus:ring-red-500/20",
        purple: "focus:ring-purple-500/20",
        amber: "focus:ring-amber-500/20",
        lime: "focus:ring-lime-500/20",
        green: "focus:ring-green-500/20",
        emerald: "focus:ring-emerald-500/20",
        teal: "focus:ring-teal-500/20",
        cyan: "focus:ring-cyan-500/20",
        sky: "focus:ring-sky-500/20",
        indigo: "focus:ring-indigo-500/20",
        violet: "focus:ring-violet-500/20",
        fuchsia: "focus:ring-fuchsia-500/20",
        pink: "focus:ring-pink-500/20",
        rose: "focus:ring-rose-500/20"
    },
    borderFocus: {
        primary: "focus:border-primary-500",
        blue: "focus:border-blue-500",
        orange: "focus:border-orange-500",
        yellow: "focus:border-yellow-500",
        red: "focus:border-red-500",
        purple: "focus:border-purple-500",
        amber: "focus:border-amber-500",
        lime: "focus:border-lime-500",
        green: "focus:border-green-500",
        emerald: "focus:border-emerald-500",
        teal: "focus:border-teal-500",
        cyan: "focus:border-cyan-500",
        sky: "focus:border-sky-500",
        indigo: "focus:border-indigo-500",
        violet: "focus:border-violet-500",
        fuchsia: "focus:border-fuchsia-500",
        pink: "focus:border-pink-500",
        rose: "focus:border-rose-500"
    },
    text: {
        primary: "text-primary-500",
        blue: "text-blue-500",
        orange: "text-orange-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        purple: "text-purple-500",
        amber: "text-amber-500",
        lime: "text-lime-500",
        green: "text-green-500",
        emerald: "text-emerald-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        indigo: "text-indigo-500",
        violet: "text-violet-500",
        fuchsia: "text-fuchsia-500",
        pink: "text-pink-500",
        rose: "text-rose-500"
    },
    textHover: {
        primary: "hover:text-primary-500",
        blue: "hover:text-blue-500",
        orange: "hover:text-orange-500",
        yellow: "hover:text-yellow-500",
        red: "hover:text-red-500",
        purple: "hover:text-purple-500",
        amber: "hover:text-amber-500",
        lime: "hover:text-lime-500",
        green: "hover:text-green-500",
        emerald: "hover:text-emerald-500",
        teal: "hover:text-teal-500",
        cyan: "hover:text-cyan-500",
        sky: "hover:text-sky-500",
        indigo: "hover:text-indigo-500",
        violet: "hover:text-violet-500",
        fuchsia: "hover:text-fuchsia-500",
        pink: "hover:text-pink-500",
        rose: "hover:text-rose-500"
    }
};

function useOnClickOutside(ref, handler) {
    require$$0.useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

const React = require$$0__default["default"];

function ChevronUpDownIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(ChevronUpDownIcon$1);
var ChevronUpDownIcon_1 = ForwardRef;

var ChevronUpDownIcon = ChevronUpDownIcon_1;

const CloseIcon = ({ className = "" }) => {
    return (require$$0__default["default"].createElement("svg", { className: className, fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
        require$$0__default["default"].createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })));
};

const SelectContext = require$$0.createContext({
    value: null,
    handleValueChange: selected => {
        console.log("selected:", selected);
    },
    formatGroupLabel: null,
    formatOptionLabel: null,
    classNames: undefined
});
const useSelectContext = () => {
    return require$$0.useContext(SelectContext);
};
const SelectProvider = ({ value, handleValueChange, otherData, children }) => {
    const store = require$$0.useMemo(() => {
        return {
            value,
            handleValueChange,
            formatGroupLabel: otherData && typeof otherData.formatGroupLabel === "function"
                ? otherData.formatGroupLabel
                : null,
            formatOptionLabel: otherData && typeof otherData.formatOptionLabel === "function"
                ? otherData.formatOptionLabel
                : null,
            classNames: otherData?.classNames || undefined
        };
    }, [handleValueChange, otherData, value]);
    return require$$0__default["default"].createElement(SelectContext.Provider, { value: store }, children);
};

const DisabledItem = ({ children }) => {
    const { classNames } = require$$0.useContext(SelectContext);
    return (require$$0__default["default"].createElement("div", { className: classNames && classNames.listDisabledItem
            ? classNames.listDisabledItem
            : "px-2 py-2 cursor-not-allowed truncate text-gray-400 select-none" }, children));
};

const Item = ({ item, primaryColor }) => {
    const { classNames, value, handleValueChange, formatOptionLabel } = useSelectContext();
    const isSelected = require$$0.useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);
    const textHoverColor = require$$0.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.textHover[primaryColor];
        }
        return THEME_DATA.textHover[DEFAULT_THEME];
    }, [primaryColor]);
    const bgColor = require$$0.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.bg[primaryColor];
        }
        return THEME_DATA.bg[DEFAULT_THEME];
    }, [primaryColor]);
    const bgHoverColor = require$$0.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.bgHover[primaryColor];
        }
        return THEME_DATA.bgHover[DEFAULT_THEME];
    }, [primaryColor]);
    const getItemClass = require$$0.useCallback(() => {
        const baseClass = "block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded";
        const selectedClass = isSelected
            ? `text-white ${bgColor}`
            : `text-gray-500 ${bgHoverColor} ${textHoverColor}`;
        return classNames && classNames.listItem
            ? classNames.listItem({ isSelected })
            : `${baseClass} ${selectedClass}`;
    }, [bgColor, bgHoverColor, classNames, isSelected, textHoverColor]);
    return (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null, formatOptionLabel ? (require$$0__default["default"].createElement("div", { onClick: () => handleValueChange(item) }, formatOptionLabel({ ...item, isSelected }))) : (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null, item.disabled ? (require$$0__default["default"].createElement(DisabledItem, null, item.label)) : (require$$0__default["default"].createElement("li", { "aria-selected": isSelected, role: "option", onClick: () => handleValueChange(item), className: getItemClass() },
        item.label,
        require$$0__default["default"].createElement("p", { className: "text-sm" }, item.description)))))));
};

const GroupItem = ({ item, primaryColor }) => {
    const { classNames, formatGroupLabel } = useSelectContext();
    return (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null, item.options.length > 0 && (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null,
        formatGroupLabel ? (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null, formatGroupLabel(item))) : (require$$0__default["default"].createElement("div", { className: classNames && classNames.listGroupLabel
                ? classNames.listGroupLabel
                : "pr-2 py-2 cursor-default select-none truncate font-bold text-gray-700" }, item.label)),
        item.options.map((item, index) => (require$$0__default["default"].createElement(Item, { primaryColor: primaryColor, key: index, item: item })))))));
};

const Options = ({ list, noOptionsMessage, text, isMultiple, value, primaryColor = DEFAULT_THEME }) => {
    const { classNames } = require$$0.useContext(SelectContext);
    const filterByText = require$$0.useCallback(() => {
        const filterItem = (item) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1 || (item.description != null && item.description.toLowerCase().indexOf(text.toLowerCase()) > -1);
        };
        let result = list.map(item => {
            if ("options" in item) {
                return {
                    label: item.label,
                    options: item.options.filter(filterItem)
                };
            }
            return item;
        });
        result = result.filter(item => {
            if ("options" in item) {
                return item.options.length > 0;
            }
            return filterItem(item);
        });
        return result;
    }, [text, list]);
    const removeValues = require$$0.useCallback((array) => {
        if (!isMultiple) {
            return array;
        }
        if (Array.isArray(value)) {
            const valueId = value.map(item => item.value);
            const filterItem = (item) => !valueId.includes(item.value);
            let newArray = array.map(item => {
                if ("options" in item) {
                    return {
                        label: item.label,
                        options: item.options.filter(filterItem)
                    };
                }
                return item;
            });
            newArray = newArray.filter(item => {
                if ("options" in item) {
                    return item.options.length > 0;
                }
                else {
                    return filterItem(item);
                }
            });
            return newArray;
        }
        return array;
    }, [isMultiple, value]);
    const filterResult = require$$0.useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);
    return (require$$0__default["default"].createElement("div", { role: "options", className: classNames && classNames.list
            ? classNames.list
            : "max-h-72 overflow-y-auto overflow-y-scroll" },
        filterResult.map((item, index) => (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, { key: index }, "options" in item ? (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null,
            require$$0__default["default"].createElement("div", { className: "px-2.5" },
                require$$0__default["default"].createElement(GroupItem, { primaryColor: primaryColor || DEFAULT_THEME, item: item })),
            index + 1 < filterResult.length && require$$0__default["default"].createElement("hr", { className: "my-1" }))) : (require$$0__default["default"].createElement("div", { className: "px-2.5" },
            require$$0__default["default"].createElement(Item, { primaryColor: primaryColor || DEFAULT_THEME, item: item })))))),
        filterResult.length === 0 && require$$0__default["default"].createElement(DisabledItem, null, noOptionsMessage)));
};

const SearchInput = ({ placeholder = "", value = "", onChange, name = "" }) => {
    const { classNames } = require$$0.useContext(SelectContext);
    return (require$$0__default["default"].createElement("div", { className: classNames && classNames.searchContainer
            ? classNames.searchContainer
            : "relative py-1 px-2.5" },
        require$$0__default["default"].createElement("input", { className: "w-full py-2 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none", type: "text", placeholder: placeholder, value: value, onChange: onChange, name: name })));
};

const Spinner = ({ primaryColor = DEFAULT_THEME }) => {
    const spinnerColor = require$$0.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return THEME_DATA.text[primaryColor];
        }
        return THEME_DATA.text[DEFAULT_THEME];
    }, [primaryColor]);
    return (require$$0__default["default"].createElement("svg", { className: `animate-spin mr-0.5 h-5 w-5 ${spinnerColor}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
        require$$0__default["default"].createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        require$$0__default["default"].createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })));
};

const Select = ({ options = [], value = null, onChange, placeholder = "Select...", searchInputPlaceholder = "Search...", isMultiple = false, isClearable = false, isSearchable = false, isDisabled = false, loading = false, menuIsOpen = false, noOptionsMessage = "No options found", primaryColor = DEFAULT_THEME, formatGroupLabel = null, formatOptionLabel = null, classNames }) => {
    const [open, setOpen] = require$$0.useState(menuIsOpen);
    const [list, setList] = require$$0.useState(options);
    const [inputValue, setInputValue] = require$$0.useState("");
    const ref = require$$0.useRef(null);
    require$$0.useEffect(() => {
        const formatItem = (item) => {
            if ("disabled" in item)
                return item;
            return {
                ...item,
                disabled: false
            };
        };
        setList(options.map(item => {
            if ("options" in item) {
                return {
                    label: item.label,
                    options: item.options.map(formatItem)
                };
            }
            else {
                return formatItem(item);
            }
        }));
    }, [options]);
    const toggle = require$$0.useCallback(() => {
        if (!isDisabled) {
            setOpen(!open);
        }
    }, [isDisabled, open]);
    const closeDropDown = require$$0.useCallback(() => {
        if (open)
            setOpen(false);
    }, [open]);
    useOnClickOutside(ref, () => {
        closeDropDown();
    });
    const onPressEnterOrSpace = require$$0.useCallback((e) => {
        e.preventDefault();
        if ((e.code === "Enter" || e.code === "Space") && !isDisabled) {
            toggle();
        }
    }, [isDisabled, toggle]);
    const handleValueChange = require$$0.useCallback((selected) => {
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
    }, [closeDropDown, isMultiple, onChange, value]);
    const clearValue = require$$0.useCallback((e) => {
        e.stopPropagation();
        onChange(null);
    }, [onChange]);
    const removeItem = require$$0.useCallback((e, item) => {
        if (isMultiple && Array.isArray(value) && value.length) {
            e.stopPropagation();
            const result = value.filter(current => item.value !== current.value);
            onChange(result.length ? result : null);
        }
    }, [isMultiple, onChange, value]);
    require$$0.useCallback(() => {
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
        const baseClass = "flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none";
        const defaultClass = `${baseClass} ${isDisabled
            ? "bg-gray-200"
            : `bg-white hover:border-gray-400 ${borderFocus} focus:ring ${ringColor}`}`;
        return classNames && classNames.menuButton
            ? classNames.menuButton({ isDisabled })
            : defaultClass;
    }, [classNames, isDisabled, primaryColor]);
    const getTagItemClass = require$$0.useCallback(() => {
        const baseClasse = "flex space-x-1";
        const disabledClass = isDisabled ? "border-gray-500 px-1" : "pl-1";
        return classNames && classNames.tagItem
            ? classNames.tagItem({ isDisabled })
            : `${baseClasse} ${disabledClass}`;
    }, [classNames, isDisabled]);
    return (require$$0__default["default"].createElement(SelectProvider, { otherData: {
            formatGroupLabel,
            formatOptionLabel,
            classNames
        }, value: value, handleValueChange: handleValueChange },
        require$$0__default["default"].createElement("div", { className: "relative w-full mt-1", ref: ref },
            require$$0__default["default"].createElement("div", { tabIndex: 0, "aria-expanded": open, onKeyDown: onPressEnterOrSpace, onClick: toggle, className: "bg-white cursor-default rounded-lg text-left border outline-16 border-primary px-3 placeholder-primary-500 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-500 sm:text-sm flex" },
                require$$0__default["default"].createElement("div", { className: "grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1 w-full" }, !isMultiple ? (require$$0__default["default"].createElement("p", { className: "truncate cursor-default select-none" }, value && !Array.isArray(value) ? value.label : placeholder)) : (require$$0__default["default"].createElement(require$$0__default["default"].Fragment, null,
                    value === null && placeholder,
                    Array.isArray(value) &&
                        value.map((item, index) => (require$$0__default["default"].createElement("div", { className: getTagItemClass(), key: index },
                            require$$0__default["default"].createElement("p", { className: classNames && classNames.tagItemText
                                    ? classNames.tagItemText
                                    : "text-gray-600 truncate cursor-default select-none" }, item.label),
                            !isDisabled && (require$$0__default["default"].createElement("div", { onClick: e => removeItem(e, item), className: classNames &&
                                    classNames.tagItemIconContainer
                                    ? classNames.tagItemIconContainer
                                    : "flex items-center px-1 cursor-pointer rounded-r-sm hover:bg-secondary-200 hover:text-secondary-600" },
                                require$$0__default["default"].createElement(CloseIcon, { className: classNames && classNames.tagItemIcon
                                        ? classNames.tagItemIcon
                                        : "w-3 h-3 mt-0.5" }))))))))),
                require$$0__default["default"].createElement("div", { className: "flex flex-none items-center py-1.5" },
                    loading && (require$$0__default["default"].createElement("div", { className: "px-1.5" },
                        require$$0__default["default"].createElement(Spinner, { primaryColor: primaryColor }))),
                    isClearable && !isDisabled && value !== null && (require$$0__default["default"].createElement("div", { className: "px-1.5 cursor-pointer", onClick: clearValue },
                        require$$0__default["default"].createElement(CloseIcon, { className: classNames && classNames.closeIcon
                                ? classNames.closeIcon
                                : "w-5 h-5 p-0.5" }))),
                    require$$0__default["default"].createElement("div", { className: "h-full" },
                        require$$0__default["default"].createElement("span", { className: "w-px h-full inline-block text-white bg-gray-300 text-opacity-0" })),
                    require$$0__default["default"].createElement("div", { className: "px-1.5" },
                        require$$0__default["default"].createElement(ChevronUpDownIcon, { className: "h-5 w-5 text-primary", "aria-hidden": "true" })))),
            open && !isDisabled && (require$$0__default["default"].createElement("div", { tabIndex: -1, className: classNames && classNames.menu
                    ? classNames.menu
                    : "absolute z-20 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700" },
                isSearchable && (require$$0__default["default"].createElement(SearchInput, { value: inputValue, placeholder: searchInputPlaceholder, onChange: e => setInputValue(e.target.value) })),
                require$$0__default["default"].createElement(Options, { list: list, noOptionsMessage: noOptionsMessage, text: inputValue, isMultiple: isMultiple, value: value, primaryColor: primaryColor || DEFAULT_THEME }))))));
};

module.exports = Select;
//# sourceMappingURL=index.cjs.js.map
