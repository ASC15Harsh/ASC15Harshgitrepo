package assignment;

import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

class issue_class2 {
    String issue_Id, title, description, assignee, priority, status;
    Date date = new Date();

    public issue_class2(String issue_Id, String title, String description, String assignee, String priority,
            String status) {
        this.issue_Id = issue_Id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.priority = priority;
        this.status = status;
    }

    void display2() {
        System.out.println("Issue id  :" + issue_Id);
        System.out.println(title);
        System.out.println(description);
        System.out.println(priority);
        System.out.println(status);
        System.out.println(assignee);
        System.out.println(date);
    }

    @Override
    public String toString() {
        String message = "Issue Id is: " + issue_Id + " and Title is: " + title;
        return message;
    }
}

public class Issue2 {
    public static void main(String[] args) {
        int option;
        ArrayList<issue_class2> issueList = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("select an option ");
            System.out.println(" Press 1 to Add Issues");
            System.out.println(" Press 2 to View Issues ");
            System.out.println(" Press 3 to Search Issues ");
            System.out.println(" Press 4 to Exit ");

            option = sc.nextInt();
            sc.nextLine();

            switch (option) {
                case 1:
                    System.out.println(" Add Issues");
                    System.out.println("Enter the Issue ID");
                    String issue_Id = sc.nextLine();
                    System.out.println("Enter the Issue Title");
                    String title = sc.nextLine();
                    System.out.println("Enter the Issue description");
                    String description = sc.nextLine();
                    System.out.println("Enter the Issue Priority [LOW, MEDIUM, HIGH]");
                    String priority = sc.nextLine();
                    System.out.println("Enter the Issue Status [OPEN,IN-PROGRESS,RESOLVED,CLOSED]");
                    String status = sc.nextLine();
                    System.out.println("Enter the Issue assignee");
                    String assignee = sc.nextLine();
                    issue_class2 newIssue = new issue_class2(issue_Id, title, description, assignee, priority, status);
                    issueList.add(newIssue);
                    break;
                case 2:
                    System.out.println("View Issues");
                    for (issue_class2 issue : issueList) {
                        issue.display2();
                        System.out.println();
                    }
                    break;
                case 3:
                    System.out.println("Search Issues");
                    System.out.println("Enter the ID to search");
                    String searchId = sc.nextLine();
                    boolean found = false;
                    for (int i = 0; i < issueList.size(); i++) {
                        if (issueList.get(i).issue_Id.equals(searchId)) {
                            issueList.get(i).display2();
                            found = true;
                            break;
                        }
                    }
                    break;
                case 4:
                    System.out.println("Exiting the application");
                    return;
                default:
                    System.out.println("Wrong input");
            }
        }

    }
}