import java.util.*;

/**
 * secondMaxMin
 * https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/
 */
public class secondMaxMin {
public static void main(String[] args) {
  List<Integer>arr=new ArrayList<>();
   arr=Arrays.asList(new Integer[]{32011, 123 ,1045 ,1205 ,254, 28763 ,6537, 3161});
  bruteForce(arr);



}
public static void bruteForce(List<Integer> arr){
  int max = Integer.MIN_VALUE;
  int max2 = Integer.MIN_VALUE;
  for (int i = 0; i < arr.size(); i++) {
    if(arr.get(i)>max){
      max=arr.get(i);
    }
   
    
  }
  for (int i = 0; i < arr.size(); i++) {
    if(arr.get(i)>max2&&arr.get(i)!=max){
      max2=arr.get(i);
    }
    
  }
  System.out.println(max2);
}
  
}