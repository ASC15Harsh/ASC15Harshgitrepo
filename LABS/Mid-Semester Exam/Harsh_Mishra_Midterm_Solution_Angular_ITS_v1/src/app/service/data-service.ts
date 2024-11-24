import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../model/data.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) {}


  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  getIssueById(id: string): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/${id}`);
  }


  addIssue(newIssue: Issue): Observable<Issue> {
    return this.getIssues().pipe(
      map((issues) => {
        const maxId = issues.reduce((max, issue) => Math.max(Number(max), Number(issue.id)), 0);
        newIssue.id = (maxId + 1).toString();  
        return newIssue;
      }),
      switchMap((issue) => this.http.post<Issue>(this.apiUrl, issue))
    );
  }

  deleteIssue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateIssue(id: string, updatedIssue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${id}`, updatedIssue);
  }
}
