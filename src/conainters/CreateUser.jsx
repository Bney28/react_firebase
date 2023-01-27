import React, { useContext } from 'react'

const CreateUser = () => {

  const { sendUser } = useContext(usersDispatcherContext)

  return (
    <>
      <div className="p-3">
        <h3>CreateUser</h3>

      </div>
    </>
  )
}

export default CreateUser