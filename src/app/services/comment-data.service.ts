import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../components/about-component/about-comment-list/Comment';

const URL = 'https://685479426a6ef0ed662f2f06.mockapi.io/mood/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Comment[]> {
      return this.http.get<Comment[]>(URL)
  }

  public postComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(URL, comment)
  }
}
