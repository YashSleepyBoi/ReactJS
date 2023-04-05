import React, { useState } from 'react'
import FormControl from './components/Form/FormControl'
import UserDisplay from './components/UserDisplay/UserDisplay'

function App () {
  const [users_list, setUserList] = useState([])

  const newUserAdder = (user) => {

    const new_users_list = [
      ...users_list,
      user
    ]
    setUserList(new_users_list)
  }

  return (
    <div>
      <FormControl onFormSubmit={newUserAdder} />
      <UserDisplay data={users_list} />
      {console.log(users_list)}
    </div>
  )
}

export default App
