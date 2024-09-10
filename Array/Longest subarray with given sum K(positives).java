// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class HelloWorld {
    public static void main(String[] args) {
        int arr[]={2,3,5,1,9};
        int total=10;
        int left=0;
        int right=0;
        int n=arr.length;
        long sum=arr[0];
        int maxLength=0;
        while(right<n){
            while(left<=right&&sum>total){
                sum-=arr[left];
            left++;    
            }
        if(sum==total){
            maxLength=Math.max(maxLength,right-left+1);
        }
        right++;
        if(right<n){
            sum+=arr[right];
        }
            
        }
        
System.out.println(maxLength);
    }
    
}
