package Training.JavaDemos.Lab_Assignment.lab_5;

public class q5 {

    public static void main(String[] args) {
        Storage storage = new EmployeeStorage();
        
        try {
            Employee emp1 = new Employee(101, "John Doe");
            storage.addEmployee(emp1);
            Employee emp2 = new Employee(101, "Jane Smith");
            storage.addEmployee(emp2); // This will throw EmployeeAlreadyExistsException
        } catch (EmployeeAlreadyExistsException e) {
            System.out.println(e.getMessage());
        }

        try {
            Employee emp = storage.getEmployee(101);
            System.out.println("Employee Found: " + emp);
        } catch (EmployeeNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}

interface Storage {
    void addEmployee(Employee e) throws EmployeeAlreadyExistsException;
    Employee getEmployee(int empno) throws EmployeeNotFoundException;
}

class EmployeeStorage implements Storage {
    private Employee[] employees = new Employee[10];
    private int index = 0;

    @Override
    public void addEmployee(Employee e) throws EmployeeAlreadyExistsException {
        for (int i = 0; i < index; i++) {
            if (employees[i].getEmpno() == e.getEmpno()) {
                throw new EmployeeAlreadyExistsException("Employee with empno " + e.getEmpno() + " already exists.");
            }
        }
        if (index < employees.length) {
            employees[index++] = e;
            System.out.println("Employee added: " + e);
        } else {
            System.out.println("Storage full. Cannot add employee.");
        }
    }

    @Override
    public Employee getEmployee(int empno) throws EmployeeNotFoundException {
        for (int i = 0; i < index; i++) {
            if (employees[i].getEmpno() == empno) {
                return employees[i];
            }
        }
        throw new EmployeeNotFoundException("Employee with empno " + empno + " not found.");
    }
}

class Employee {
    private int empno;
    private String name;

    public Employee(int empno, String name) {
        this.empno = empno;
        this.name = name;
    }

    public int getEmpno() {
        return empno;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Employee [empno=" + empno + ", name=" + name + "]";
    }
}

class EmployeeAlreadyExistsException extends Exception {
    public EmployeeAlreadyExistsException(String message) {
        super(message);
    }
}

class EmployeeNotFoundException extends Exception {
    public EmployeeNotFoundException(String message) {
        super(message);
    }
}
