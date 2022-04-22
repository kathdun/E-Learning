import QuestionModel from '../models/question-model';
import http from "../http-commom";


export default class QuestionService{

    static getQuestions(): Promise<QuestionModel[]> {
        return http.get("/questions")
        .then(response=>response.data);
    }

    static get(id:number):Promise<QuestionModel[]> {
        return http.get(`/questions/${id}`)
        .then(response=>response.data);
    }
    static getQByPostID(postId:number): Promise<QuestionModel[]> {
        return http.get(`/questions/${postId}`)
        .then(response=>response.data);
    }

    static getNumQByPostID(postId:number) {
        return http.get(`/questions/count/${postId}`)
        .then(res => res.data);
    }


    create(data:QuestionModel) {
        return http.post("/questions", data);
    }

    update(id:number, data:QuestionModel) {
        return http.put(`/questions/${id}`, data);
    }

    static updateLikes(id:number, data:number[]): Promise<string> {
        return http.put(`/questions/addLikes/${id}`, data);
    }

    delete(id:number) {
        return http.delete(`/questions/${id}`);
    }

    deleteAll() {
        return http.delete(`/questions`);
    }

    findByTitle(title:string) {
        return http.get(`/questions?cours=${title}`);
    }
}