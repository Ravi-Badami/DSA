public class CheckIfSorted {
  public static void main(String[] args) {
      int[] nums = {3, 4, 5, 1, 2};
      boolean value = checkIfSortedAndRotated(nums);
      System.out.println(value);
  }

  public static boolean checkIfSortedAndRotated(int[] arr) {
      int n = arr.length;
      if (n <= 1) {
          return true;
      }

      int count = 0; // To count the number of places where the order breaks

      for (int i = 0; i < n; i++) {
          if (arr[i] > arr[(i + 1) % n]) {
              count++;
          }
      }

      // The array is sorted and rotated if there is exactly one break point or no break point (fully sorted)
      return count == 0 || count == 1;
  }
}
