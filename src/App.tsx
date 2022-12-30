import { useState } from 'react'
import './App.css'

//reqres.in/api/users/1?delay=1

function App() {
  const [count, setCount] = useState(0)

  return (
      <section>
        <img src={""}/>

        <p>
          first last
        </p>

        <p>Email: email@email.com</p>

        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </section>

  )
}

export default App
