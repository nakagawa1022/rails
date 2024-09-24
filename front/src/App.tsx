import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/groups')
      .then(response => response.json())
      .then(data => setGroups(data))
  }, [])

  return (
    <>
      {groups.map((group: any) => (
        <div key={group?.id}>{group?.name}</div>
      ))}
    </>
  )
}

export default App
