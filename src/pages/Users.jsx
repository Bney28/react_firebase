import React from 'react'
import { CreateUser, GetUsers } from '../conainters'

const Users = () => {
  return (
    <>
      <div>Users</div>
      <CreateUser />
      <GetUsers />
    </>
  )
}

export default Users