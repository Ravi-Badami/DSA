public class armstrongNumber {
  public static void main(String[] args) {
    int n=153;
    int intial=n;
    int lastdigit=0;
    int result=0;
    while(n>0){
      lastdigit=n%10;
      result=result+(lastdigit*lastdigit*lastdigit);
      System.out.println("sum"+result);
      n=n/10;

    }
if(intial==result){
  System.out.println("true");
}else{
  System.out.println("false "+intial+" "+result);
}
    


   
  }
 
}
