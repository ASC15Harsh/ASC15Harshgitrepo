package Training.JavaDemos.Lab_Assignment.lab_1;

public class q1 {
    
    public int add(int a, int b) {
        return a + b;
    }


    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public String add(String a, int b) {
        return a + " " + b;
    }

    public static void main(String[] args) {
      
        q1 adder = new q1();

         System.out.println("add(10, 20) = " + adder.add(10, 20));

        System.out.println("add(10, 20, 30) = " + adder.add(10, 20, 30));  

        System.out.println("add(10.5, 20.1) = " + adder.add(10.5, 20.1)); 

      
        System.out.println("add(\"Hello\", 20) = " + adder.add("Hello", 20));  
    }
}
