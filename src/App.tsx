import { useState } from 'react'
import './App.css'
import { useQuery } from "react-query";

//reqres.in/api/users/1?delay=1

export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function getUser(id: number) {
//reqres.in/api/users/1?delay=1
  const request = await fetch(`reqres.in/api/users/${id}?delay=1`);

  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.error);
  }

  return response.data as IData
  
}

function App() {
  const [currentId, setCurrentUserId] = useState(1);
  const { data, isError, isLoading } = useQuery(["users", currentId], 
    () => getUser(currentId)
  );

  if (isError) {
    return(
      <section>
        <p>Somethin wen wrong</p>
      </section>
    );
  }

  if (!data || isLoading) {
    return(
      <section>
        <p>teste</p>
        <h1>dfsfd</h1>
      </section>
    );
  }

  return (
      <section>
        <img src={data.avatar}/>

        <p>
          {data.first_name} {data.last_name}
        </p>

        <p>Email: {data.email}</p>

        <div>
          <button onClick={() => setCurrentUserId((prev) => prev -1)}>
            Prev
          </button>
          <button onClick={() => setCurrentUserId((prev) => prev +1)}>
            Next
          </button>
        </div>
      </section>

  )
}

export default App
