
// Inverted half pyramid with numbers 

// Output:
// 12345
// 1234
// 123
// 12
// 1

public class Half_pyramid_with_numbers {
    public static void main(String[] args) {

        int n=7;
        for (int i=1 ; i<=n; i++)
        {
        for (int j=1; j<=n-i+1;j++){
            System.out.print(j+ " "); 
     
        }
            System.out.println();
        }
   
    }

}
