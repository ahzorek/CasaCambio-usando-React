import './DisplayValue.css'

function InputValue({
  value,
  onChange,
  title = 'input',
  placeholder = '259,90',
  output = false
}) {
  return (
    <input
      className="min-h-100 p-6 value-display"
      readOnly={output}
      onChange={onChange || null}
      value={value}
      required
      title={title}
      placeholder={placeholder}
      autoComplete="off"
      type="number"
      min="0"
      step=".01"
    />
  )
}

function OutputValue({
  value,
  title = 'output',
  placeholder = '',
}) {
  return (
    <input
      className="min-h-100 p-6 value-display"
      readOnly
      value={value}
      title={title}
      placeholder={placeholder}
      type="text"
    />
  )
}

export { InputValue, OutputValue }
