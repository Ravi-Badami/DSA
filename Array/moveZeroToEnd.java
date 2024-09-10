import java.util.ArrayList;

public class moveZeroToEnd {
  public static void main(String[] args) {
    int arr[]={0,1,0,3,12};
    moveZeroes(arr);
    
  }
  public static void moveZeroes(int[] nums) {
    int arr[]=new int[nums.length];
int count=0;
int j=0;
for (int i = 0; i < nums.length; i++) {
  
  if(nums[i]!=0){
    arr[j++]=nums[i];
    count++;
  }
  
}

System.out.print("[");
for (int i = 0; i < arr.length; i++) {
  System.out.print(arr[i]);
  if (i < arr.length - 1) {
    System.out.print(",");
  }
}
System.out.print("]");
}
}
