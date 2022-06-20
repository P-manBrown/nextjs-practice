import { createContext, useContext } from "react";

type User = {
  id: number
  name: string
}

const UserContext = createContext<User | null>(null) 

const GrandChild = () => {
  const user = useContext(UserContext)

  return user !== null ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const ParentUseContext = () => {
  const user: User = {
    id: 1,
    name: 'T'
  }

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default ParentUseContext