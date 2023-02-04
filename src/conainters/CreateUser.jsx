import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from '../components'
import { users } from '../context'

const CreateUser = () => {

  const { id } = useParams()
  const { error, isLoading, currentUser } = useContext(users.usersContext)
  const { getUserDetails, sendUser } = useContext(users.usersDispatcherContext)

  useEffect(() => {
    if (id) {
      getUserDetails(id)
    }
  }, [id])

  return (
    <>
      <div className="p-3">
        <h3>CreateUser</h3>
        {error && <p>error al crear user: {error}</p>}
        {isLoading && <p>Is Loading</p>}
        <UserForm initialValues={currentUser} sendUser={sendUser} />
      </div>
    </>
  )
}

export default CreateUser