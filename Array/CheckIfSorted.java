public class CheckIfSorted {
  public static void main(String[] args) {
      int[] nums = {3,6,10,1,8,9,9,8,9};
      boolean value = checkIfSortedAndRotated(nums);
      System.out.println(value);
  }

  public static boolean checkIfSortedAndRotated(int[] arr) {
    int count=0;
    if(arr.length==1){
        return true;
    }
     if(arr[0]<arr[arr.length-1]){
        count++;
     }
     for (int i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1]){
            count++;
        }
        if(count>1){
            System.out.println(count);
            return false;
        }
        
     }

     return true;

}}
