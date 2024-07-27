import java.util.*;


public class freqHandL {
  public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);

    // System.out.printf("Enter the size of the array");
    // n=sc.nextInt();
    // int[] arr=new int[n];
    // System.out.println("Enter the elemets of the array");
    // for (int i = 0; i < n; i++) {
    //   arr[i]=sc.nextInt();
      
    // }
    int[] arr={1,1,1,2};
    HashMap<Integer,Integer> mp=new HashMap<>();
    for (int i = 0; i < arr.length; i++) {
      int key=arr[i];
      int freq=0;
      if(mp.containsKey(key)) freq=mp.get(key);
      freq++;
      mp.put(key,freq);
    }
    
    int maxElement=0;
    int minELement=arr.length;
    for (Map.Entry<Integer,Integer>hs : mp.entrySet()) {
      // System.out.println(maxElement);
      if(maxElement<hs.getValue()){
        maxElement=hs.getValue();
      }
      else if(minELement>hs.getValue()){
        minELement=hs.getValue();
      }
      // if(maxElement>hs.getValue()){
      //   maxElement=hs.getValue();
      //   System.out.println(maxElement);
      // }else if(minELement<hs.getValue()){
      //   minELement=hs.getValue();
      //   System.out.println(minELement);
      // } 
    }
    System.out.println(maxElement);
    System.out.println(minELement);

  }
}
