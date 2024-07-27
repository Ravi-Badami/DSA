import java.util.Scanner;
import java.util.*;
public class maps {
 public static void main(String[] args) {
  Scanner sc=new Scanner(System.in);
  System.out.println("enter the length of the array");
  
  int n=sc.nextInt();
  
  int[] arr=new int[n];
  System.out.println("enter the element of array");
  for (int i = 0; i < n; i++) {
    arr[i]=sc.nextInt();
    
  }
  
  HashMap<Integer,Integer> mp =new HashMap<>();
  for (int i = 0; i < n; i++) {
    int key=arr[i];
    int freq=0;
    if(mp.containsKey(key)) freq=mp.get(key);
    freq++;
    mp.put(key,freq);
    
  }


  int q;
  System.out.println("Enter how many elemets you want to check");
  q=sc.nextInt();
  System.out.println("Enter the element to search");
  while (q--!=0) {
    int number;
    number=sc.nextInt();
    if(mp.containsKey(number)){
      System.out.println("The number "+number+" is present "+ mp.get(number));
    }else{
      System.out.println("The number is present "+0+"times");
    }
    
    
  }
  






 }
 
}
