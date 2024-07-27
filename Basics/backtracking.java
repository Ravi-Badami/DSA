public class backtracking {
  public static void main(String[] args) {
    backtracking2(1, 3);
    System.out.println("-------------");
    backtracking1(3, 3);

  }
  public static void backtracking2(int i,int m){
    if(i> m){
      return;
    }
    backtracking2(i+1, m);
    System.out.println(i);
  }
  public static void backtracking1(int i,int m){
    if(i<1){
      return;
    }
    backtracking1(i-1, m);
    System.out.println(i);
  }
}
