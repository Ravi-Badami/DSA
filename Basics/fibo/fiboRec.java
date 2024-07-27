public class fiboRec {
  public static void main(String[] args) {

      int n=3;
      int ans=fibo(n);
      System.out.println(ans);
  }
  public static int fibo(int n){
    
    if(n<=1){
      return n;
    }
  
    int first=fibo(n-1);
    int last=fibo(n-2);
    return first+last;
  }
}
