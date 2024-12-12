package demos;

class car{
 String fuel;
 Integer price;
 String name;
 car(){
    fuel = "Petrol";
    price = 100;
    System.out.println(price);
 }
 void display(){
    name = "Ertiga";
    System.out.println(name);
 }
}

public class classandobjects{
    public static void main(String[] args) {
        car c = new car();
        System.out.println(c.fuel);
        c.display();
    }
}




