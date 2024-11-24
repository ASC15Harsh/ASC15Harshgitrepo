package Training.JavaDemos.Lab_Assignment.lab_1;

public class q5 {

    public static void testStringMethods() {
        String str1 = "Hello World";
        String str2 = "hello world";
        String str3 = "   Java Programming  ";
        // String str4 = "Java";
        
        System.out.println("charAt(4): " + str1.charAt(4));
        System.out.println("contains('World'): " + str1.contains("World"));
        System.out.println("length(): " + str1.length());
        System.out.println("indexOf('o'): " + str1.indexOf('o'));
        System.out.println("equals(str2): " + str1.equals(str2));
        System.out.println("equalsIgnoreCase(str2): " + str1.equalsIgnoreCase(str2));
        String[] words = {"Java", "is", "fun"};
        System.out.println("join(' ', words): " + String.join(" ", words));
        System.out.println("lastIndexOf('o'): " + str1.lastIndexOf('o'));
        System.out.println("substring(6, 11): " + str1.substring(6, 11));
        System.out.println("toLowerCase(): " + str1.toLowerCase());
        System.out.println("toUpperCase(): " + str1.toUpperCase());
        System.out.println("trim(): '" + str3.trim() + "'");
    }

    public static void main(String[] args) {
        testStringMethods();
    }
}
