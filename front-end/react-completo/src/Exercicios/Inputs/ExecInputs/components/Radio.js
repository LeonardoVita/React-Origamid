import React from 'react'

export default function Radio({ value, setValue, options }) {
  return (
    <>
      {
        options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              onChange={({ target }) => setValue(target.value)}
              checked={value === option}
            />
            {option}
          </label>
        ))
      }
    </>
  )
}
