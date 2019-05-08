import axios from 'axios'

const request = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "":'http://localhost:3001',
    withCredentials: true,
})

class AuthAPI {

    static errorHandle(e){
        throw e
    }

    static isLoggedin(){
        return request.get('/auth/loggedin')
        .then(res => res.data)
        .catch(AuthAPI.errorHandle)
    }

    static login(username, password){
        return request.post('/auth/login', {username, password})
        .then(res => res.data)
        .catch(AuthAPI.errorHandle)
    }

    static logout(){
        return request.get('/auth/logout')
        .then(() => console.log('logout bye'))
        .catch(AuthAPI.errorHandle)
    }

    static sendForm(username, confirm, numberPeople, alergies, specialDiet, comments){
        return request.post('/form', {username, confirm, numberPeople, alergies, specialDiet, comments})
        .then(res => res.data)
        .catch(AuthAPI.errorHandle)
    }
}

export default AuthAPI