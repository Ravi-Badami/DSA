public class intro{
  static int count=0;
  public static void main(String[] args) {
   print();
   System.out.println("after stack is over");
  }
  public static void print(){
    if(count==3){
      return;
    }
    System.out.println(count);
    count++;
    print();
  
  }
  
}