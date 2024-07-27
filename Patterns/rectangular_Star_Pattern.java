public class rectangular_Star_Pattern{
  public static void main(String[] args) {
    int n=5;
    pattern8(n);
 
  }

  //Triangle pattern
  public static void pattern7(int n){
    for(int i=0;i<n;i++){
      for(int j=0;j<n-i-1;j++){
        System.err.printf(" ");
      }
      for(int k=0;k<2*i-1;k++){
        System.err.printf("*");
      }
  
      System.err.println();

    }

  }
  
  //Inverted Triangle
  public static void pattern8(int n){
    for(int i=1;i<=n;i++){
      
      for(int j=1;j<i;j++){
        System.out.printf(" ");
      }
      for(int j=0;j<2*n-(2*i-1);j++){
        System.out.printf("*");

      }
    System.out.println();

    }
    
  
  }

  //Daimond pattern
  public static void pattern9(int n){
    for(int i=0;i<=n;i++){
      for(int j=0;j<=n-i-1;j++){
        System.out.printf(" ");
      }
      for(int j=0;j<2*i-1;j++){
        System.out.printf("*");
      }
      System.out.println();
    }
    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
System.out.printf(" ");
      }
      for(int j=0;j<((2*n)-1)-2*i;j++){
System.out.printf("*");
      }
    
      System.out.println();
    }
  }

  // Half Diamond Star Pattern
  public static void pattern10(int n){
    for(int i=0;i<n;i++){
      for(int j=0;j<=i;j++){
        System.out.printf("*");
      }
      System.out.println();
    }
    for(int i=1;i<n;i++){
      for(int j=0;j<n-i;j++){
        System.out.printf("*");
      }
      System.out.println();
    }
  }

  // Binary Number Triangle Pattern
  public static void pattern11(int n){
    for(int i=1;i<=n;i++){
      for(int j=i;j>0;j--){
          if(j%2==0){
            System.out.printf("0");
          }
          else {
            System.out.printf("1");
          }
      }
      System.out.println();
    }
  }

  //Number Crown Pattern
  public static void pattern12(int n){
    for(int i=1;i<=n;i++){
for(int j=1;j<=i;j++){
  System.out.print(j);
}
      for(int j=0;j<(2*n)-(2*i);j++){
System.out.printf(" ");
      }
      for(int j=i;j>0;j--){
        System.out.print(j);
      }
      System.out.println();
    }
  }

  //Increasing Number Triangle Pattern
  public static void pattern13(int n){
    int count=0;
    for(int i=1;i<=n;i++){
      for (int j=0;j<i;j++){
        count++;
        System.out.print(count);
        System.out.printf(" ");
      }
      System.out.println();
    }
  }

  // Increasing Letter Triangle Pattern
  public static void pattern14(int n){
for(int i=1;i<=n;i++){
  for (char ch = 'A'; ch < 'A'+i; ch++) {
    System.out.print(ch + " ");
}
System.out.println();
}
   
  }

//Reverse Letter Triangle Pattern
  public static void pattern15(int n){
    for(int i=n;i>=1;i--){
      for (char ch = 'A'; ch < 'A'+i; ch++) {
        System.out.print(ch + " ");
    }
    System.out.println();
    }
  }

  //Alpha-Ramp Pattern
  public static void pattern16(int n){
    for(int i=0;i<n;i++){
      
      int alpha='A'+i;
      char ch=(char)alpha;
     
      for(int j=0;j<=i;j++){
        System.out.print(ch +" ");
       
      }
      
      System.out.println();
    }
  }

  //Alpha-Hill Pattern
  public static void pattern17(int n){
    for(int i=1;i<=n;i++){
      for(int j=n-i;j>0;j--){
        System.out.printf(" ");
      }
      for(int j=0;j<n*i-1;j++){
      char ch='A';
      int breakpoint=(2*i);
      System.out.print((char)ch++);

      
        
      
      }
      System.out.println();


    }
  }

  public static void pattern18(int n){
    for(int i=0;i<n;i++){
      for(char ch=(char)(int)('A'+n-1-i);ch<=(char)(int)('A'+n-1);ch++){
System.out.print(ch+"");

      }
      System.out.println();
    }
  }
  public static void pattern19(int n){
    for(i=n;i>0;i--){
      for(j=i;j>0;j--){
        System.out.print('*');
      }
      System.out.println();
    }

  }
}
