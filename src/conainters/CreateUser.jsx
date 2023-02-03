import React, { useContext } from 'react'
import {UserForm} from '../components'
import { usersDispatcherContext, usersContext } from '../context/users'

const CreateUser = () => {

  const { userCreate: { error, isLoading } } = useContext(usersContext)

  return (
    <>
      <div className="p-3">
        <h3>CreateUser</h3>
        {error && <p>error al crear user: {error}</p>}
        {isLoading && <p>Is Loading</p>}
        <UserForm />
      </div>
    </>
  )
}

export default CreateUser