public class sumOfN {
  static int sum;
    static int total;
  public static void main(String[] args) {
    sumParameter(1,7);
    System.out.println("-------------");
    int result=sumFunctional(7);
    System.out.println(result);
  }
  public static void sumParameter(int i,int n){
    
    if(i>n){
      System.out.println(total);
      return;
    }
    sum=i*i*i;
    total=total+sum;

    sumParameter(i+1,n);

  }
  public static int sumFunctional(int n){
    if(n==0){
      return 0;
    }
    return n*n*n+sumFunctional(n-1);
  }
}
