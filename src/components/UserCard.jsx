import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ username, name, id, deleteUser }) => {

    const LINK_ADDRESS = `/users/${id}`

    const handleDeleteWithId = () => {
        return deleteUser(id)
    }

    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className='card-title'>
                        {username}
                    </h5>
                    <p className='card-text'>
                        {name} con id: {id}
                    </p>
                    <Link className='btn btn-primary' to={LINK_ADDRESS}>
                        Editar
                    </Link>
                    <button className='btn btn-danger' onClick={handleDeleteWithId}>
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserCard