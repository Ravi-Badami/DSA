//https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/
public class largestEle {
  public static void main(String[] args) {

    int arr[]={2,5,-1,3,0};
    int temp=0;
    int n=arr.length;
    // bruteForce(arr);
    int result=optimized(arr,temp,n);
    System.out.println(result);
  
  }
  public static void bruteForce(int arr[]){
    int temp=0;
    for (int i = 0; i < arr.length; i++) {
      if(arr[i]>temp){
        temp=arr[i];
      }
      
    }
    System.out.println(temp);
  }
  public static int optimized(int arr[],int temp,int n){
 
    if(n==1){
      return 1;
    }
    // System.out.println(arr[n-1]);cke
    System.out.println(optimized(arr,temp,n-1));

    return optimized(arr,temp,n-1);


  }
  
}