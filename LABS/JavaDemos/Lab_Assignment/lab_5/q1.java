package Training.JavaDemos.Lab_Assignment.lab_5;

public class q1 {

    public static void main(String[] args) {
        try {
            System.out.println("Executing the try block.");
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block, it will always execute.");
        }

        try {
            String str = null;
            int length = str.length();
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }

        try {
            System.out.println("Outer try block.");
            try {
                System.out.println("Inner try block.");
                int[] numbers = new int[5];
                numbers[10] = 100;
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Caught ArrayIndexOutOfBoundsException in inner try block: " + e.getMessage());
            }
        } catch (Exception e) {
            System.out.println("Caught Exception in outer try block: " + e.getMessage());
        }

        try {
            System.out.println("Demonstrating throw keyword:");
            throw new ArithmeticException("Manually thrown ArithmeticException");
        } catch (ArithmeticException e) {
            System.out.println("Caught manually thrown exception: " + e.getMessage());
        }

        try {
            methodThatThrowsException();
        } catch (Exception e) {
            System.out.println("Caught exception from methodThatThrowsException: " + e.getMessage());
        }
    }

    public static void methodThatThrowsException() throws Exception {
        throw new Exception("Exception thrown from methodThatThrowsException");
    }
}
