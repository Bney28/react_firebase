import React from 'react'
import { CreateUser, GetUsers } from '../containers'

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