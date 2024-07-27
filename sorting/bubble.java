public class bubble {
  public static void main(String[] args) {
    int arr[]={2,4,5,1,44,22};
    int n=arr.length;
    for (int i = n-1; i >=0 ; i--) {
    for (int j = 0; j < i-1; j++) {
      if(arr[i]>arr[j]){
        // System.out.println("this is i "+arr[i]);
        // System.out.println("this is i+1 "+arr[i+1]);
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      
      
    }
    }}
        
      for (int j = 0; j < arr.length; j++) {
        System.out.println(arr[j]);
      }
    
  }
}
