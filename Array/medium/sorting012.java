class sorting012 {
    public static void main(String[] args) {
        int[] arr = {2, 0, 1};
        sortColors(arr);
    }

    public static void sortColors(int[] nums) {
        int low = 0;
        int high = nums.length - 1;
        int mid = 0;

        while (mid <= high) {
            if (nums[mid] == 0) {
                // Swap nums[mid] with nums[low] and increment both low and mid
                int temp = nums[low];
                nums[low] = nums[mid];
                nums[mid] = temp;
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                // If the current element is 1, just move mid forward
                mid++;
            } else if (nums[mid] == 2) {
                // Swap nums[mid] with nums[high] and decrement high
                int temp = nums[high];
                nums[high] = nums[mid];
                nums[mid] = temp;
                high--;
            }
        }

        // Printing the sorted array
        System.out.print("[");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + (i == nums.length - 1 ? "" : ","));
        }
        System.out.println("]");
    }
}

