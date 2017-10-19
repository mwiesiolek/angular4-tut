import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {GitFollowerService} from "./git-follower.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'git-follower',
  templateUrl: './git-follower.component.html',
  styleUrls: ['./git-follower.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GitFollowerComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute,
              private service: GitFollowerService) {
  }

  ngOnInit(): void {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ]).subscribe(combined => {
      let id = +combined[0].get('id');
      let page = +combined[1].get('page');
      let order = combined[1].get('order');

      // this.service.getAll({id: id, page: page})
      this.service.getAll().subscribe(result => this.followers = result);
    });
  }
}
