// data.model.ts
export interface Issue {
    id: string;
    title: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    priority: 'Low' | 'Medium' | 'High';  
    assignee: string;
    date: string;  
  }
  