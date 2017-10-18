import { Injectable } from '@angular/core';
import {DataService} from "../common/data.service";
import {Http} from "@angular/http";

@Injectable()
export class GitFollowerService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/mwiesiolek/followers', http);
  }
}
