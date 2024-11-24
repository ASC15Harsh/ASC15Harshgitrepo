package Training.JavaDemos.Lab_Assignment.lab_2;

public class q4 {

    public static void printDigitsInWords(int number) {
        if (number < 100 || number > 999) {
            System.out.println("Please enter a 3-digit number.");
            return;
        }

        String[] words = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
        
        int hundreds = number / 100;
        int tens = (number % 100) / 10;
        int ones = number % 10;

        System.out.println(words[hundreds] + " " + words[tens] + " " + words[ones]);
    }

    public static void main(String[] args) {
        int number = 951;
        printDigitsInWords(number);
    }
}
