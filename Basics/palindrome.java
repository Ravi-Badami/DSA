public class palindrome {
  public static void main(String[] args) {
    int n=7;
    int original=n;
    int reverse=0;
    int lastdigit;
    while(n>0){
      lastdigit=n%10;
      
      reverse=reverse*10+lastdigit;
      n=n/10;

    }
    if(original==reverse){
      System.out.println("true");

    }else{
      System.out.println("false");
    
    }
    
  }
}
