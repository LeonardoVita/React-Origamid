import React from 'react'

export default function Checkbox({ options, value, setValue }) {

  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value])
    }
    else {
      setValue(value.filter((itemValue) => itemValue !== target.value))
    }
  }

  return (
    <>
      {
        options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))
      }
    </>
  )
}
