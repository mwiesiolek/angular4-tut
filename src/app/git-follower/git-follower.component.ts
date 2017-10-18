import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {GitFollowerService} from "./git-follower.service";

@Component({
  selector: 'git-follower',
  templateUrl: './git-follower.component.html',
  styleUrls: ['./git-follower.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GitFollowerComponent implements OnInit {
  followers: any[];

  constructor(private service: GitFollowerService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(result => this.followers = result);
  }

}
