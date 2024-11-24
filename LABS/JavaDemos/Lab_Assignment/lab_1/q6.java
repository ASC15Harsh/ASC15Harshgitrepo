package Training.JavaDemos.Lab_Assignment.lab_1;

import java.util.Arrays;

public class q6 {
    
    public static class ArrayStore {
        
        private int[] array = new int[10];
        
        public void acceptNumbers() {
            for (int i = 0; i < array.length; i++) {
                array[i] = (int) (Math.random() * 100);
            }
        }

        public void displayArrayWhile() {
            int i = 0;
            System.out.println("Array elements using while loop:");
            while (i < array.length) {
                System.out.print(array[i] + " ");
                i++;
            }
            System.out.println();
        }

        public void displayArrayFor() {
            System.out.println("Array elements using for loop:");
            for (int i = 0; i < array.length; i++) {
                System.out.print(array[i] + " ");
            }
            System.out.println();
        }

        public void sortArray() {
            Arrays.sort(array);
        }

        public int countOccurrences(int num) {
            int count = 0;
            for (int i = 0; i < array.length; i++) {
                if (array[i] == num) {
                    count++;
                }
            }
            return count;
        }

        public void insertAtPosition(int num, int position) {
            if (position < 0 || position >= array.length) {
                System.out.println("Invalid position.");
                return;
            }
            for (int i = array.length - 1; i > position; i--) {
                array[i] = array[i - 1];
            }
            array[position] = num;
        }

        public int[] removeDuplicates() {
            int[] tempArray = new int[array.length];
            int tempIndex = 0;

            for (int i = 0; i < array.length; i++) {
                boolean isDuplicate = false;
                for (int j = 0; j < tempIndex; j++) {
                    if (array[i] == tempArray[j]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    tempArray[tempIndex++] = array[i];
                }
            }

            int[] resultArray = new int[tempIndex];
            System.arraycopy(tempArray, 0, resultArray, 0, tempIndex);
            return resultArray;
        }

        public static void main(String[] args) {
            ArrayStore store = new ArrayStore();
            
            store.acceptNumbers();
            
            store.displayArrayWhile();
            store.displayArrayFor();
            
            store.sortArray();
            System.out.println("Sorted Array:");
            store.displayArrayFor();
            
            int number = 5;
            System.out.println("Occurrences of " + number + ": " + store.countOccurrences(number));
            
            store.insertAtPosition(99, 5);
            System.out.println("Array after inserting 99 at position 5:");
            store.displayArrayFor();
            
            int[] uniqueArray = store.removeDuplicates();
            System.out.print("Array without duplicates: ");
            for (int num : uniqueArray) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
