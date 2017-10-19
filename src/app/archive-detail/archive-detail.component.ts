import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {
  year: number;
  month: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.year = +params.get('year');
        this.month = +params.get('month');
      });
  }

  viewAll() {
    this.router.navigate(['/archive']);
  }
}
