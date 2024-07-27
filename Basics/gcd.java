public class gcd {
  //BRUTE-FORCE
  // public static void main(String[] args) {
  //   int n=20;
  //   int m=15;
  //   int maxGCD=0;
  //   int maxNum=0;
  //   if(n>m){
  //     maxNum=n;
  //   }else{
  //     maxNum=;
  //   }
  //   for (int i = 1; i <=maxNum; i++) {
  //     if(n%i==0&&m%i==0){
  //       if(maxGCD<i){
  //         maxGCD=i;
  //       }
  //     }
  //   }
  //   System.out.println("gcd="+maxGCD);
    
  // }

  //OPTIMAL
  public static void main(String[] args) {
    int n=52;
    int m=14;
    while(n>0&&m>0){
      if(n>m){
        n=n%m;

      }else if(m>n){
        m=m%n;
      }
    }
    if(n==0){
      System.out.println(m);
    }else{
      System.out.println(n);
    }
  }
}
