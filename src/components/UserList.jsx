import React from 'react'
import UserCard from './UserCard'

const UserList = ({ list }) => {
  return (
    <>

      <div className='p-3 mt-1'>
        <div className="mt-5 mb-3">
          <span>User List</span>
          <span>Lista de Componentes</span>
        </div>
        {
          list && list.map((e) => {
            return (
              <UserCard
                key={e.id}
                username={e.username}
                name={e.name}
                id={e.id}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default UserList