import java.util.Arrays;

public class BubbleSort {
    public static void main(final String[] args) {
        final int[] unsorted = { 9,5,7,3,6,2,1 };
        System.out.println("Unsorted array: "+Arrays.toString(unsorted));
        int[] sorted = sort(unsorted);
        System.out.println("Sorted array: "+Arrays.toString(unsorted));
    }

    public static int[] sort(final int[] unsorted) {
        boolean swapped = true;

        while (swapped) {
            swapped = false;
            for (int i = 0; i < unsorted.length - 1; i++) {
                if (unsorted[i] > unsorted[i + 1]) {
                    int tmp = unsorted[i];
                    unsorted[i] = unsorted[i + 1];
                    unsorted[i + 1] = tmp;
                    swapped = true;
                }
            }
        }
        return unsorted;
    }
}