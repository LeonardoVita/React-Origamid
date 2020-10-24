import React from 'react'

export default function Input({ label, id, value, setValue, onChange, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        // onChange={({ target }) => setValue(target.value)}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
