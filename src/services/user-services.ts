import UserModel from '../models/user-model';
import http from "../http-commom";


export default class UserService{

    static getUsers(): Promise<UserModel[]> {
        return http.get("/users")
        .then(response=>response.data);
    }

    get(id:number) {
        return http.get(`/users/${id}`);
    }

    create(data:UserModel) {
        return http.post("/users", data);
    }

    update(id:number, data:UserModel) {
        return http.put(`/users/${id}`, data);
    }

    delete(id:number) {
        return http.delete(`/users/${id}`);
    }

    deleteAll() {
        return http.delete(`/users`);
    }

    findByTitle(title:string) {
        return http.get(`/users?cours=${title}`);
    }
}