//https://leetcode.com/problems/search-insert-position/

// import java.util.*;

import java.util.Arrays;

public class search_insert_35{
  public static void main(String[] args){
int arr[]={1,3,4,5};
int result=searchInsert(arr, 0);
System.err.println("the output is "+""+result);
  }
  public static int searchInsert(int[] nums, int target) {
    // System.err.println(Arrays.toString(nums));
    int temp=0;
    for (int i = 0; i < nums.length; i++) {
      // System.err.println(i);
      if (nums[i]>temp) {
        temp=nums[i];
        if(target<temp){
          System.err.println("done");
        return i;
      }
      if(target<nums[i]){
        return i;
      }

      }
      if(nums[i]==target){
        return i;
      }
      
      
    }
    if(target>temp){
      return nums.length;
    }
        return 0;
  }
}