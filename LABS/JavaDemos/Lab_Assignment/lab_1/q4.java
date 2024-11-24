package Training.JavaDemos.Lab_Assignment.lab_1;

public class q4 {

    public static int countWords(String input) {
     
        String[] words = input.trim().split("\\s+");

        return words.length;
    }

    public static void main(String[] args) {
       
        String input = "Sum of 12 and 20 is 32";
        
       
        int wordCount = countWords(input);
        System.out.println("Number of words: " + wordCount);
    }
}
