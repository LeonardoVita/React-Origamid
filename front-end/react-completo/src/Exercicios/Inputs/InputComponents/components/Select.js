import React from 'react'

export default function Select({ options, value, setValue, ...props }) {
  return (
    <>
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled >Selecione</option>
        {
          options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            )
          })
        }
      </select>
    </>
  )
}
