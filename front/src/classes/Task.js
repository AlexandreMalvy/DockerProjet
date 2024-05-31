import asyncFetch from '../assets/functions/fetch';

const url = 'http://localhost:5000/task'

export default class Task{
    constructor(id, name, description, checked=false){
        this.id = id
        this.name = name 
        this.description = description
        this.checked = checked
    }

    static async getAll(){
        const res = await asyncFetch(url, 'GET')
        return res.map(r => new Task(r.id, r.name, r.description,r.checked))
    }

    async save() {
        
        if (this.id){
            const res = await asyncFetch(url, 'PUT', this)
            return res
        } else {
            const res = await asyncFetch(url, 'POST', this)
            return res
        }
    }

    async delete(){
        const res = await asyncFetch(url + '/' +this.id, 'DELETE')
        return res
    }
}