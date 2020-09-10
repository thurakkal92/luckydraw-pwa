function size(size) {
  if (typeof (size) === "number")
    return `${size}px`
  else
    return size
}

export default size