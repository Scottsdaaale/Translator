import React from 'react'
import Select from 'react-select'

function Test() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div>
      <Select options={options}/>
    </div>
  )
}

export default Test