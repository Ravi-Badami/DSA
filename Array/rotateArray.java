public class rotateArray {
  public static void main(String[] args) {
    int k=2;
    int[] arr={-1,-100,3,99};
    rotate(arr,k);

  } public static void rotate(int[] nums, int k) {
    int arr[]=new int[nums.length];
    // System.out.println(nums.length);
    int j=k;
    for (int i = 0; i <k; i++) {
      // System.out.print(nums[nums.length-k]+ " ");
      // System.out.println();
      
      arr[i]=nums[nums.length-j];
      j--;

    }
    j=k;
    for (int i = 0; i < arr.length-k; i++) {
      arr[j++]=nums[i];
      
    }
  System.out.print('[');
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+",");
    }
    System.out.println(']');
        
    }

}
