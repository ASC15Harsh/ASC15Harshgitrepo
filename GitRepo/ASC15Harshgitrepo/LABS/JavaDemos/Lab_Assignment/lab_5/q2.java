// package Training.JavaDemos.Lab_Assignment.lab_5;

// public class q2 {

//     public static void main(String[] args) {
//         try {
//             checkAge(15);
//         } catch (InvalidAgeException e) {
//             System.out.println("Caught InvalidAgeException: " + e.getMessage());
//         }
//     }

//     public static void checkAge(int age) throws InvalidAgeException {
//         if (age < 18) {
//             throw new InvalidAgeException("Age must be 18 or older.");
//         } else {
//             System.out.println("Age is valid.");
//         }
//     }
// }

// class InvalidAgeException extends Exception {

//     public InvalidAgeException() {
//         super("Invalid age provided.");
//     }

//     public InvalidAgeException(String message) {
//         super(message);
//     }

//     public InvalidAgeException(String message, Throwable cause) {
//         super(message, cause);
//     }

//     public InvalidAgeException(Throwable cause) {
//         super(cause);
//     }
// }
