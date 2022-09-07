import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private readonly baseUrl: string = "http://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + "posts");
  }

  getPostById(id : number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "posts/" + id);
  }
}
