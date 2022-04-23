import { useState, useEffect } from 'react'
import './App.css'

import UserComponent from './components/UserComponent'
import Loading from './components/Loading'

const URL_API = 'https://jsonserverusers-api.herokuapp.com/users'

function App () {
  const [users, setUsers] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false)
  const fetchUserData = async () => {
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(URL_API)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='App'>
      {
        users?.length > 0
          ? (
              users.map((user, index) => <UserComponent key={index} user={user} />)
            )
          : (
            <Loading />
            )

      }
    </div>
  )
}

export default App
