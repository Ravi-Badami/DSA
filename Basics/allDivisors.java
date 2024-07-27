public class allDivisors {
  public static void main(String[] args) {
    int n=12;
    int sqrt=(int) Math.sqrt(n);

    for(int i=1;i<=sqrt;i++){
      if(n%i==0){
        System.out.print(i+" ");
      }
      System.out.print(n/i+" ");
    }}}