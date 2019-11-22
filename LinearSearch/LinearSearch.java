import java.util.Arrays;

public class LinearSearch {
    public static void main(final String[] args) {
        int[] sorted = {1,2,3,4,5,6};
        int searchValue = 4;

        int index = findIndex(sorted, searchValue);

        if (index != -1) {
            System.out.println("Search value "+searchValue+" was found at index "+index+" of array: "+Arrays.toString(sorted));
        } else {
            System.out.println("Search value "+searchValue+" was not found in the array: "+Arrays.toString(sorted));
        }
    }

    public static int findIndex(final int[] arr, final int val) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }
}
