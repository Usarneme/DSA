import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] unsorted = {4,9,7,1,3,6,5,14,42,835,2};
        int[] sorted = selectionSort(unsorted);
        System.out.println("Sorted (For Loops) array: "+ Arrays.toString(sorted));
    }

    private static int[] selectionSort(int[] unsorted) {
        for (int i = 0; i < unsorted.length; i++) {
            // start with the lowest val (the 0th element within the remaining-unsorted array)
            int lowestValueIndex = 0;
            int lowestValue = unsorted[i];

            // look for a value lower than the currently lowest index's value
            for (int j = i; j < unsorted.length; j++) {
                if (unsorted[j] < lowestValue) {
                    lowestValueIndex = j;
                    lowestValue = unsorted[j];
                }
                int temp = unsorted[i];
                unsorted[i] = lowestValue;
                unsorted[lowestValueIndex] = temp;
            }
        }
        return unsorted;
    }
}