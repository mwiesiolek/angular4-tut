import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PostError} from "./post-error";
import {PostNotFoundError} from "./post-not-found-error";
import {PostBadRequestError} from "./post-bad-request-error";

@Injectable()
export class PostService {
  private url: string = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts(): Observable<Response> {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post): Observable<Response> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(id: number): Observable<Response> {
    return this.http.delete(this.url + '/' + id).catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new PostBadRequestError(error.json()));
    } else if (error.status === 404) {
      return Observable.throw(new PostNotFoundError(error.json()));
    } else {
      return Observable.throw(new PostError(error.json()));
    }
  }
}
