import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service';
import { Issue } from '../model/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  issue: Issue = {
    id: '',
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: '',
    date: '' 
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  addNewIssue(): void {
    if (!this.issue.title || !this.issue.description || !this.issue.priority || !this.issue.status || !this.issue.assignee) {
      alert('Please fill up all the details before submitting the form.');
      return;  
    }

    this.issue.date = new Date().toISOString();
    
    this.dataService.addIssue(this.issue).subscribe(() => {
      this.resetForm();
      alert("Issue added successfully");
    });
  }

  resetForm(): void {
    this.issue = {
      id: '',
      title: '',
      description: '',
      priority: 'Low',
      status: 'Open',
      assignee: '',
      date: '' 
    };
  }

  goBack() {
    this.router.navigate(['/navbar']);
  }
}
