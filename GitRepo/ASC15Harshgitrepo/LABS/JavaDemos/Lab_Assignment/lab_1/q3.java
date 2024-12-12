package Training.JavaDemos.Lab_Assignment.lab_1;

public class q3 {


    public static void printTableUsingFor(int number) {
        System.out.println("Multiplication table using for loop:");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }

  
    public static void printTableUsingWhile(int number) {
        System.out.println("Multiplication table using while loop:");
        int i = 1;
        while (i <= 10) {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        }
    }

    
    public static void printTableUsingDoWhile(int number) {
        System.out.println("Multiplication table using do-while loop:");
        int i = 1;
        do {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        } while (i <= 10);
    }

   
    public static void main(String[] args) {
        int number = 2; 
        
       
        printTableUsingFor(number);
        System.out.println();
        printTableUsingWhile(number);
        System.out.println();
        printTableUsingDoWhile(number);
    }
}
