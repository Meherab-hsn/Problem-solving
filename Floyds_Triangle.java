
// Floyd's Triangle

// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

public class Floyds_Triangle { 

public static void main (String [] args ){

int counter =1;
int n=7;

for (int i=1 ; i<=n ; i++)
{

for(int j=1; j<=i; j++)
{
    System.out.print(counter );
    counter++;
}
System.out.println();
}
    }
}
