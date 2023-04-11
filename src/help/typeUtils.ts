import React from "react"

export const isValidReactNode = (value: React.ReactNode): boolean => {
  // Check if the value is a valid React element
  if (React.isValidElement(value)) {
    return true
  }

  // Check if the value is a primitive type (string, number, boolean, null, or undefined)
  const valueType = typeof value
  if (
    valueType === "string" ||
    valueType === "number" ||
    valueType === "boolean" ||
    value === null ||
    value === undefined
  ) {
    return true
  }

  // Check if the value is a valid array of ReactNode
  if (Array.isArray(value)) {
    return value.every(isValidReactNode)
  }

  // If none of the conditions are met, the value is not a valid ReactNode
  return false
}
