import java.util.*;

public class hashBasic {

  public static void main(String[] args) {
    HashMap<String,Integer> hash= new HashMap<>();
    hash.put("ravi",5);
    hash.put("ravi2",5);
    
    
    for (Map.Entry<String,Integer>hs : hash.entrySet()) {
      if(hs.getKey()=="ravi"){
        System.out.println(hs);
      }
      
    }
    
  }
  
}