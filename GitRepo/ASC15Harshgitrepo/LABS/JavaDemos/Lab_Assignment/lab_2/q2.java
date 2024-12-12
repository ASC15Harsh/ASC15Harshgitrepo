package Training.JavaDemos.Lab_Assignment.lab_2;

import java.util.Scanner;

public class q2 {
    
    public static String welcomeMessage(String name) {
        return "Hello " + name + ", Welcome to Java World!";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        String message = welcomeMessage(name);
        System.out.println(message);
    }
}
