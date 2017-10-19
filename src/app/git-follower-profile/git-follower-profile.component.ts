import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-git-follower-profile',
  templateUrl: './git-follower-profile.component.html',
  styleUrls: ['./git-follower-profile.component.css']
})
export class GitFollowerProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap
      .subscribe(params => {
        console.log(params);

        let id = +params.get('id');
        console.log(id);
      });
  }
}
