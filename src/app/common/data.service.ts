import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {AppError} from "./app-error";
import {NotFoundError} from "./not-found-error";
import {BadRequestError} from "./bad-request-error";

@Injectable()
export class DataService {
  constructor(private url: string, protected http: Http) {
  }

  getAll(): Observable<Response> {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  create(resource): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource): Observable<Response> {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(this.url + '/' + id).catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadRequestError(error.json()));
    } else if (error.status === 404) {
      return Observable.throw(new NotFoundError(error.json()));
    } else {
      return Observable.throw(new AppError(error.json()));
    }
  }
}
