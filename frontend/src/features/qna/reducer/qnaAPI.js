import axios from "axios"
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const add = x => axios.post(`${SERVER}/qna/add`,JSON.stringify(x),{headers})
const remove = x => axios.delete(`${SERVER}/qna/delete/${x}`)
const find = x => axios.get(`${SERVER}/qna/find`,JSON.stringify(x),{headers})
const modify = x => axios.put(`${SERVER}/qna/modify/${x}`)
const list = x => axios.get(`${SERVER}/qna/list/${x}`)

export default {
    add,
    remove,
    find,
    modify,
    list
}
