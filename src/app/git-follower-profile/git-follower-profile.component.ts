import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-git-follower-profile',
  templateUrl: './git-follower-profile.component.html',
  styleUrls: ['./git-follower-profile.component.css']
})
export class GitFollowerProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = this.router.snapshot.paramMap.get('id');

    this.route.paramMap
      .subscribe(params => {
        console.log(params);

        let id = +params.get('id');
        let username = params.get('username');

        console.log(id + ': ' + username);
      });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }
}
