package demos;
public class helloworld {

    byte byteVar = -128;
    short shortVar= 32767;
    int intVar= 12123536;
    long longVar= 53346398468745981L;
    float floatVar= 546.873f;
    double doubleVar= 123.456;
    char charVar= 'J';
    boolean boolVar= false;

    public void display(){
        System.out.println("byte" + byteVar);
        System.out.println("short" + shortVar);
        System.out.println("int" + intVar);
        System.out.println("long" + longVar);
        System.out.println("float" + floatVar);
        System.out.println("double" +doubleVar);
        System.out.println("char" + charVar);
        System.out.println("boolean" + boolVar);
    }
    public static void main(String[] args) {
        System.out.println("This is for demo");

        helloworld abstractdata1=new helloworld();
        abstractdata1.display();
       
    }
}