import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service';
import { Issue } from '../model/data.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    this.dataService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/navbar']);
  }
}
