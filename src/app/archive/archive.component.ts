import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})

export class ArchiveComponent implements OnInit {
  archives: any[];

  constructor() {}

  ngOnInit(): void {
    this.archives = [
      {year: 2017, month: 1},
      {year: 2017, month: 2},
      {year: 2017, month: 3}
    ];
  }
}
