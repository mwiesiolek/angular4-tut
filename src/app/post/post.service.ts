import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PostError} from "./post-error";
import {PostNotFoundError} from "./post-not-found-error";
import {PostBadRequestError} from "./post-bad-request-error";

@Injectable()
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts(): Observable<Response> {
    return this.http.get(this.url);
  }

  createPost(post): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(post)).catch((error: Response) => {
      if(error.status === 400) {
        // this.form.setErrors(error.originalError);
        return Observable.throw(new PostBadRequestError(error.json()));
      }

      return Observable.throw(new PostError(error.json()));
    });
  }

  updatePost(post): Observable<Response> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id: number): Observable<Response> {
    return this.http.delete(this.url + '/' + id).catch((error: Response) => {
      if(error.status === 404) {
        return Observable.throw(new PostNotFoundError(error.json()));
      }
      return Observable.throw(new PostError(error.json()));
    });
  }
}