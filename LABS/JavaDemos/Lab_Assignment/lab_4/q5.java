package Training.JavaDemos.Lab_Assignment.lab_4;

// Step 1: Creation of Interface
interface Vehicle {
    void start();
    void stop();
}

// Step 2: Creation of Interface by Extending Another Interface
interface ElectricVehicle extends Vehicle {
    void charge();
}

// Step 3: Creation of a Class by Extending Another Class and Implementing Multiple Interfaces
class Car {
    void honk() {
        System.out.println("The car is honking!");
    }
}

class ElectricCar extends Car implements ElectricVehicle {
    // Implementing methods from Vehicle interface
    public void start() {
        System.out.println("Electric car is starting.");
    }

    public void stop() {
        System.out.println("Electric car is stopping.");
    }

    // Implementing method from ElectricVehicle interface
    public void charge() {
        System.out.println("Charging the electric car.");
    }
}

// Step 4: Creation of a Reference Variable of an Interface
public class q5 {
    public static void main(String[] args) {
        // Step 5: Creation of a Class that Implements Above Interface (ElectricCar is used here)
        
        // Step 6: Store an Object of Class in the Reference Variable of the Interface
        ElectricVehicle myCar = new ElectricCar();

        // Step 7: Call the Methods of the Object Using Interface Reference Variable
        myCar.start();      // Calls start() from Vehicle interface
        myCar.stop();       // Calls stop() from Vehicle interface
        myCar.charge();     // Calls charge() from ElectricVehicle interface
        
        // Calling method from Car class using ElectricCar object
        ElectricCar myElectricCar = new ElectricCar();
        myElectricCar.honk(); // Calling honk() from Car class
    }
}
