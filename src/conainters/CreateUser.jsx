import React, { useContext } from 'react'
import UserForm from '../components/UserForm'
import { usersDispatcherContext, usersContext } from '../context/users'

const CreateUser = () => {

  const { userCreate: { error, isLoading } } = useContext(usersContext)
  const { sendUser } = useContext(usersDispatcherContext)

  return (
    <>
      <div className="p-3">
        <h3>CreateUser</h3>
        {error && <p>error al crear user: {error}</p>}
        {isLoading && <p>Is Loading</p>}
        <UserForm sendUser={sendUser} />
      </div>
    </>
  )
}

export default CreateUser