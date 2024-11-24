package assignment;

import java.util.Scanner;

// Print only the characters from the string test by removing the special characters = "welcome$abc!1test";
//explore 5 methods of your choices
public class assignment3 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string");
        String input=sc.nextLine(); 
     
        String output = input.replaceAll("[^a-zA-Z]", "");
        
        System.out.println(output);

    }
}
