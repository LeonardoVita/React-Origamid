import React from 'react'

export default function Input({
  label,
  id,
  value,
  onChange,
  type,
  onBlur,
  placeholder,
  error
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <span style={{ color: "red", fontSize: "14px", marginLeft: "10px" }}>*{error}</span>}

    </>
  );
}
