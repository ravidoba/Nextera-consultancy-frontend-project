import { useEffect, useState } from "react";
import './style.scss'
export const TextField = ({ label, type = "text", value, onChange, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
  
    useEffect(() => {
      setHasValue(value !== undefined && value !== null && value.toString().trim().length > 0);
    }, [value]);
  
    const isActive = isFocused || hasValue;
  
    const handleChange = (e) => {
      if (onChange) {
        onChange(e);
      }
      setHasValue(e.target.value.trim().length > 0);
    };
  
    return (
      <div className={`text-field ${isActive ? "active" : ""}`}>
        <label className={`text-field__label ${isActive ? "text-field__label--active" : ""}`}>
          {label}
        </label>
        <input
          className="text-field__input"
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    );
  };
  