import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient: HttpClient) {

  }

  getAllPosts(): Observable<Post[]> {
    return this
      .httpclient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')

  }
}
