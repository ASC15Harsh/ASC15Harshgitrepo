package Training.JavaDemos.Lab_Assignment.lab_5;

import java.util.Scanner;

public class q4 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter your age: ");
        int age = scanner.nextInt();
        
        LearningModule learningModule = new LearningModule();
        
        try {
            learningModule.registerAge(age);
            System.out.println("Age validated and registered successfully!");
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}

class AgeValidator {
    
    public static boolean isAgeValid(int age) {
        if (age < 0) {
            throw new InvalidAgeException("Age cannot be negative.");
        }
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or older.");
        }
        return true;
    }
}

class LearningModule {
    
    public void registerAge(int age) {
        if (AgeValidator.isAgeValid(age)) {
            System.out.println("Registration successful.");
        }
    }
}

class InvalidAgeException extends RuntimeException {
    
    public InvalidAgeException() {
        super("Invalid age provided.");
    }
    
    public InvalidAgeException(String message) {
        super(message);
    }

    public InvalidAgeException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidAgeException(Throwable cause) {
        super(cause);
    }
}
