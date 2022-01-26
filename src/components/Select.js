import React, { useState } from "react"
import Select from "react-select"

export default ({ options, ...props }) => {
  const selectStyles = {
    menu: styles => ({
      ...styles,
      color: "#0D0D0D",
      borderRadius: "8px",
      border: "none",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#EFF3F5" : "#fff",
      color: "#0D0D0D",
      "&:hover, &:active, &:focus": {
        backgroundColor: "#EFF3F5",
        color: "#0D0D0D",
      },
    }),
    input: styles => ({ ...styles, padding: 0 }),
    control: (styles, state) => ({
      ...styles,
      height: "50px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      border: "none",
      borderRadius: "8px",
    }),
    valueContainer: () => ({
      display: "flex",
      alignItems: "center",
      paddingLeft: "8px",
    }),
    placeholder: () => ({ color: "#9E9E9E" }),
  }

  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      styles={selectStyles}
      placeholder="Inquiry type"
    />
  )
}
