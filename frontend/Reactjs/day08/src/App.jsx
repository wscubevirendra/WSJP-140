import React, { useState } from 'react'
import UserForm from './UserForm'
import Table from './Table'

export default function App() {
  const [formData, setFormData] = useState([]);



  function updateForm(data) {
    const user = formData.find((d, i) => d.email == data.email);
    if (user) {
      return alert("Please try with different email id")
    }
    setFormData([...formData, data])

  }

  function removeHandler(index) {
    const newData = formData.filter((d, i) => {
      return i !== index
    })
    setFormData(newData)
  }

  return (
    <div>
      <UserForm updateForm={updateForm} />
      <Table formData={formData} removeHandler={removeHandler} />
    </div>
  )
}
