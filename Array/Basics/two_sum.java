class two_sum {
  public static void main(String args[]) {
      int[] nums = {1, 2, 3, 4};
      int target = 6;

      int[] result = twoSum(nums, target);
    if (result != null) {
        System.out.println("Indices: " + result[0] + ", " + result[1]);
    } else {
        System.out.println("No two elements found with the given target sum.");
    }
  }

  public static int[] twoSum(int[] nums, int target) { // Declaring the method as non-static
    int n = nums.length;
    for (int i = 0; i < n ; i++) {
        for (int j = i; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    return null; // No solution found
  }
}
