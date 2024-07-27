import java.util.*;
public class remove_element {
  public static void main(String[] args){
  // System.out.println("ravi");
  int[] arr={3};
  
  int newArray=removeElement( arr,2);
System.err.println(newArray);


  }
  public static int removeElement(int[] nums,int val){
    System.err.println(Arrays.toString((nums)));

    int newIndex=0;
    for (int i = 0; i < nums.length; i++) {
      if(nums[i]!=val){
        nums[newIndex]=nums[i];
        newIndex++;
      }
    }
    System.err.println(Arrays.toString((nums)));
return newIndex;
    
  }
}
