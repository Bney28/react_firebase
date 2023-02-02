import Axios from "axios";

const api = Axios.create({
    baseURL: "http://localhost:3000"
})

export const getUsers = async () => {
    let res = await api.get("/users")
    return res
}

export const getUserDetails = async (id) => {
    let res = await api.get(`/users/${id}`)
    return res
}

export const createUser = async (newUser) => {
    let res = await api.post("/users", newUser)
    return res
}

export const updateUser = async (id, newUser) => {
    let res = await api.put(`/users/${id}`, newUser)
    return res
}

export const deleteUser = async (id) => {
    let res = await api.delete(`/users/${id}`)
    return res
}