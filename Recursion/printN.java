public class printN {
  public static void main(String[] args) {
    print(1,10);
  }
  public static void print(int m,int n){
    if(m==n+1){
      return;
    }
    System.out.println(m);
    m++;
    print(m, n);
  }
}
