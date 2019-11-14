import java.util.Arrays;

public class SelectionSort0 {
    public static void main(String[] args) {
        int[] unsorted = {4,9,7,1,3,6,5,14,42,835,2};
        int[] sorted = selectionSort(unsorted);
        System.out.println("Sorted (While) array: "+ Arrays.toString(sorted));
    }

    private static int[] selectionSort(int[] unsorted) {
        // read the whole array, storing the lowest value index
        int sortToIndex = 0;

        while (sortToIndex < unsorted.length-1) { // len-1 as the last 2 elements will be in order when the element at length-2 is run through the sorter
            System.out.println("Unsorted array: "+Arrays.toString(unsorted));

            // start with the lowest val equal to the 0th element within the remaining array
            int lowestValue = unsorted[sortToIndex];
            int lowestValueIndex = sortToIndex;

            for(int i = (sortToIndex + 1); i < unsorted.length; i++) {
                // System.out.println("Comparing unsorted["+i+"] = "+unsorted[i] + " with current low: "+lowestValue);

                // look for a value lower than the currently lowest value
                if (unsorted[i] < lowestValue) {
                    // System.out.println(unsorted[i] +" is lower than previous val "+lowestValue+". Replacing val and idx.");
                    lowestValueIndex = i;
                    lowestValue = unsorted[i];
                }
            }

            System.out.println("\tReplacing unsorted["+ lowestValueIndex +"] = "+lowestValue+" with previous lowest value unsorted["+sortToIndex+"] = "+unsorted[sortToIndex]);

            // Once the whole array has been traversed, swap sortIndex value with the lowest found value
            int tmpValue = unsorted[sortToIndex];
            unsorted[sortToIndex] = lowestValue;
            unsorted[lowestValueIndex] = tmpValue;

            // repeat at sortIndex+1 until the entire array is sorted
            sortToIndex++;
        }
        return unsorted;
    }
}
