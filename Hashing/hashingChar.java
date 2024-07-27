import java.util.Scanner;

public class hashingChar {
  public static void main(String[] args) {
    String value="abcddcbaaa";
    func(value);
  }
  public static void func(String value){
    Scanner sc=new Scanner(System.in);
    int[] hash=new int[26];
    for (int i = 0; i < value.length(); i++) {
      char ch=value.charAt(i);
      hash[ch-'a']++;
    }
    int q;
    System.out.println("enter the number of   char you want to search");
    q=sc.nextInt();

    while(q-- !=0){
      char input;
      input=sc.next().charAt(0);
      System.out.println("The number of time "+ input+" appeared is "+hash[input-'a']);
    }
    
    

  }
}
