package assignment;

import java.util.Date;

class issue_class{
    String issue_Id,title,description,assignee;
    String priority[] ={"LOW", "MEDIUM", "HIGH"};
    String status[] = {"OPEN","IN-PROGRESS","RESOLVED","CLOSED"};
    Date date = new Date();

   issue_class(){
    issue_Id = "1";
    title = "demo_Issue";
    description = "This is a demo Issue";
    assignee = "Harsh";
   }
   void display(){
    System.out.println(issue_Id);
    System.out.println(title);
    System.out.println(description);
    System.out.println(priority[1]);
    System.out.println(status[2]);
    System.out.println(assignee);
    System.out.println(date);
   }

   @Override
   public String toString() {
    String message  = "Issue Id is: " + issue_Id + " and Title is: " + title;
    return message;
}
}

public class Issue {
public static void main(String[] args) {
    issue_class i = new issue_class();
    i.display();

    System.out.println(i.toString());

}
}
