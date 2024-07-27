

public class reverseArrayRec {
  public static void main(String[] args) {
    int n=5;
    int arr[]={2,4,6,7,8};
    function2(arr, 0, n-1);
    print(arr,n);
  }
  public static void function2(int arr[],int start,int end){
    if(start<end){
      int temp=arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
    function2(arr,start+1,end-1);

    }

  }

  public static void print(int arr[],int n) {
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i]+" ");
      
    }
    
  }

}
