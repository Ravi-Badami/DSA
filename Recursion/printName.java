public class printName {
  
  public static void main(String[] args) {
    print(0,2);
  }
  public static void print(int n,int m){
  if(n==m){
    return;
  }
  System.out.println("ravi");
  n++;
  print(n,m);

  }
}
