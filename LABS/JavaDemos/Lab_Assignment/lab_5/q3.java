package Training.JavaDemos.Lab_Assignment.lab_5;

public class q3 {

    public static void main(String[] args) {
        try {
            validateInput(-1);
        } catch (WrongInputException e) {
            System.out.println("Caught WrongInputException: " + e.getMessage());
        }
    }

    public static void validateInput(int input) {
        if (input < 0) {
            throw new WrongInputException("Input cannot be negative.");
        } else {
            System.out.println("Input is valid.");
        }
    }
}

class WrongInputException extends RuntimeException {

    public WrongInputException() {
        super("Wrong input provided.");
    }

    public WrongInputException(String message) {
        super(message);
    }

    public WrongInputException(String message, Throwable cause) {
        super(message, cause);
    }

    public WrongInputException(Throwable cause) {
        super(cause);
    }
}
