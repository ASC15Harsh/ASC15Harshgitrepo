import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data-service';
import { Issue } from '../model/data.model';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issues: Issue[] = []; 
  filteredIssues: Issue[] = []; 
  searchQuery: string = ''; 

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
   
    this.dataService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.filteredIssues = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/navbar']); 
  }
  searchIssues() {
    this.filteredIssues = this.issues.filter(issue => {
      return (
        issue.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        issue.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        issue.assignee.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }

  updateStatus(issue: Issue): void {
    let newStatus: "Open" | "In Progress" | "Resolved" | "Closed"; 
    if (issue.status === 'Open') {
      newStatus = 'In Progress';
    } else if (issue.status === 'In Progress') {
      newStatus = 'Resolved';
    } else if (issue.status === 'Resolved') {
      newStatus = 'Closed';
    } else {
      newStatus = 'Open';  
    }

    const updatedIssue: Issue = { 
      ...issue, 
      status: newStatus  
    };

    this.dataService.updateIssue(issue.id, updatedIssue).subscribe(
      (updatedIssue) => {
        const index = this.issues.findIndex(i => i.id === updatedIssue.id);
        if (index !== -1) {
          this.issues[index] = updatedIssue; 
          this.filteredIssues = [...this.issues]; 
        }
      },
      (error) => {
        console.error('Error updating issue status:', error);
      }
    );
  }

  deleteIssue(issue: Issue): void {
    this.dataService.deleteIssue(issue.id).subscribe(
      () => {
    
        this.issues = this.issues.filter(i => i.id !== issue.id);
        this.filteredIssues = [...this.issues];
      },
      (error) => {
        console.error('Error deleting issue:', error);
      }
    );
  }
}
