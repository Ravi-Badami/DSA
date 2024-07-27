/**
 * ! Had error for this!
 *    int arr[]={-2,3,-5};
 */
import java.util.ArrayList;


public class mergesort {
public static void main(String[] args) {
  
  int arr[]={-2,3,-5};
  int[] sortedArr=sortArray(arr);
  for (int i = 0; i < sortedArr.length; i++) {
    System.out.println(sortedArr[i]);
  }

}
public static int[] sortArray(int[] nums) {
  int n=nums.length;
  mergesort(nums, 0, n-1);
  return nums;

  
        
}
public static void mergesort(int[] arr,int low,int high){
  if(low>=high){
    return;
  }
  int mid=(low+high)/2;

  mergesort(arr, low,mid );
  mergesort(arr, mid+1, high);
  merge(arr, low, mid, high);

}
public static void merge(int[] arr,int low,int mid,int high){
  ArrayList<Integer>temp=new ArrayList<>();
  int left=low;
  int right=mid+1;

  while(left<=mid&&right<=high){
    if(arr[left]<=arr[right]){
      temp.add(arr[left]);
      left++;

      
    }
    else{
      temp.add(arr[right]);
      right++;
    }}
    if(left<=mid){
      temp.add(arr[left]);
      left++;
    }
    if(right<=high){
      temp.add(arr[right]);
      right++;
    }
    for(int i=low;i<high;i++){
      arr[i]=temp.get(i);

    }
  
}




}