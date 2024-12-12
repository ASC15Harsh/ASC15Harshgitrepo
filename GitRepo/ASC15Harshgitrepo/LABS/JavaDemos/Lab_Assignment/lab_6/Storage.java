package Training.JavaDemos.Lab_Assignment.lab_6;

public interface Storage {
    void save(String data) throws IOException;  // Save data to the file
    String read() throws IOException;           // Read data from the file
    void delete() throws IOException;           // Delete the file
    boolean exists();                           // Check if the file exists
}