
import PostModel from '../models/post-model';
import http from "../http-commom";


export default class PostService{
   
    static getAll(): Promise<PostModel[]> {
        return http.get("/posts")
        .then(response=>response.data);
      }
    
      static get(id:number) {
        return http.get(`/posts/${id}`);
      }

      static getBiggestId() {
        return http.get(`/`);
      }
    
      static create(data:PostModel) {
        return http.post("/posts",{data});
      }
    
      update(id:number, data:PostModel) {
        return http.put(`/posts/${id}`, data);
      }
    
      delete(id:number) {
        return http.delete(`/posts/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/posts`);
      }

      findByTitle(title:string) {
        return http.get(`/posts?cours=${title}`);
      }
    
}





