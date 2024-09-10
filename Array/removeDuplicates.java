import java.util.*;
public class removeDuplicates {

public static void main(String[] args) {
int[] arr={0,0,1,1,1,2,2,3,3,4};
HashSet <Integer> set=new HashSet<>();
for (int i = 0; i < arr.length; i++) {
  set.add(arr[i]);
  
}
int k=set.size();
int j=0;
for (int x : set) {
  arr[j++]=x;
  System.out.println(x);
  
}
// System.out.println(set);
for (int i = 0; i < k; i++) {
  // System.out.println(arr[i]);
}
}


  
}