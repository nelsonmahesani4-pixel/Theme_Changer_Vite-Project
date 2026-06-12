import React, { useState } from 'react'


function Contact() {
  const [data, setData] = useState("");

  function handleChange(e) {
    setData(e.target.value);
    console.log(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // alert(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={data}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default Contact
