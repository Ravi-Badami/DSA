public class reversingArray {
  public static void main(String[] args) {
    int n=5;
    int arr[]={2,4,5,6,8};
    reverseArray(n, arr);
  }

  public static void reverseArray(int n,int arr[]){
    int ans[]=new int[n];
    for (int i = 0; i < ans.length; i++) {
      ans[n-i-1]=arr[i];
    }

    
printArray(n, ans);
      
    }
    public static void printArray(int n ,int arr[]){
      for (int i = 0; i < n-1; i++) {
        System.out.print(arr[i]+ " ");
      }
    }
  }

