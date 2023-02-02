import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { usersDispatcherContext } from '../context/users';

const UserForm = () => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm()

    const { sendUser } = useContext(usersDispatcherContext)

    const sendForm = (data) => {
        sendUser(data)

        console.log(data)

        resetField('id')
        resetField('userName')
        resetField('name')
        resetField('age')
    }


    return (
        <>
            <div className="container">

                <span>UserForm</span>

                <div className="row">
                    <div className="col-3">
                        <h3>New User</h3>
                    </div>

                    <div className="col-6 pt-4">
                        <form>
                            <input
                                placeholder="id"
                                type="text"
                                className="form-control mb-2"
                                {...register("id", { required: true })}
                                
                            />
                            {errors.id && <span className='error'>Por favor escribe tu Id único</span>}

                            <input
                                placeholder="username"
                                type="text"
                                className="form-control mb-2"
                                {...register("username", { required: true })}
                            />
                            {errors.username && <span className='error'>Por favor escribe tu Username</span>}


                            <input
                                placeholder="name"
                                type="text"
                                className="form-control mb-2"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='error'>Por favor escribe tu Nombre</span>}


                            <input
                                placeholder="age"
                                type="text"
                                className="form-control mb-2"
                                {...register("age", { required: true })}
                            />
                            {errors.age && <span className='error'>Por favor escribe tu Edad</span>}


                            <button
                                className="btn btn-success"
                                /* disabled={isLoading} */
                                onClick={handleSubmit(sendForm)} >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserForm