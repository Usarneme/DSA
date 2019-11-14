import java.util.Arrays;

public class SelectionSort1 {
    public static void main(String[] args) {
        int[] unsorted = {4,9,7,1,3,6,835,5,14,42,2};
        int[] sorted = selectionSort(unsorted);
        System.out.println("Sorted (For Loops) array: "+ Arrays.toString(sorted));
    }

    private static int[] selectionSort(int[] unsorted) {

        for (int i = 0; i < (unsorted.length - 1); i++) {
//            System.out.println("Unsorted array: "+Arrays.toString(unsorted));

            // look for a value lower than the currently lowest index's value
            for (int j = i; j < unsorted.length; j++) {
                // start with the ith index and value from within the remaining-yet-unsorted array)
                int lowestValueIndex = i;
                int lowestValue = unsorted[i];

//                System.out.println("\tComparing unsorted["+j+"] = "+unsorted[j] + " with current low: "+lowestValue);

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