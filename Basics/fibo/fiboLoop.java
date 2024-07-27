
public class fiboLoop {
public static void main(String[] args) {
    int n=1;
    int ans=fibo(n);
    System.out.println(ans);
  
}
public static int fibo(int n){
  int last=1;
  int secondLast=0;
  if (n == 0) {
    return 0;
} else if (n == 1) {
    return 1;
}

  int cur=0;
  for (int i = 2; i <=n; i++) {
    cur=last+secondLast;
    secondLast=last;
    last=cur;
   
  }
  return cur;
  
}
  
}
