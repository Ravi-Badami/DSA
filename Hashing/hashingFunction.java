import java.util.Scanner;

public class hashingFunction {
public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  
  int n;
  System.out.printf("Enter the size of the hash array:");
  n=sc.nextInt();
  System.out.println("Enter the values of the hash array");
  int[] arr=new  int[n];
  for (int i = 0; i < n; i++) {
    arr[i]=sc.nextInt(); 
  }
  int[] pre=new int[13];
 for (int i = 0; i < n; i++) {
  pre[arr[i]]+=1;
  
 } 

 int q;
 System.out.println("enter the total number of elements checking");
 q=sc.nextInt();
 System.out.println("Enter the elements you want to check");
while (q-- !=0) {
  int number;
  number=sc.nextInt();
  System.out.println( "The number of time " +number+" appeared is "+pre[number]);
  
}
sc.close();
}
  
}