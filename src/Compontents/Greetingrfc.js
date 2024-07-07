import React, { useState } from 'react'

export default function Greetingrfc({ name ,message}) {
  const [names,setName] = useState(name);
  const [messages,setmessage] = useState(message);

  return (
    <div>
      {<h1>{messages} {names} </h1>}
    </div>
  )
}
