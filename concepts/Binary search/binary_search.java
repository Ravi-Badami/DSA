

public class binary_search{
  public static void main(String[] args){

    int[] arr={2,4,5,6,78,88};
    int answer=binarSearch(arr, 80);
    System.out.println(answer);

  }
  public static int binarSearch(int[] arr ,int target){
    int start=0;
    int end=arr.length-1;
    while(start<=end){
      int mid=start+(end-start)/2;//(end-start)/2 because the lenght of the array may exceed from int to bigint

      if(target<arr[mid]){
end=mid-1;
      }else if(target>arr[mid]){
        start=mid+1;
      }else{
        return mid;
      }
    }
    return -1;


  }
}