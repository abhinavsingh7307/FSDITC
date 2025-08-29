import java.util.Scanner;

public class linearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        
        System.out.println("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        
        System.out.print("Enter element to search: ");
        int key = sc.nextInt();

        
        int index = -1; 
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                index = i;
                break;
            }
        }

        
        if (index == -1) {
            System.out.println("Element not found in array.");
        } else {
            System.out.println("Element found index: " + index);
        }

        sc.close();
        System.out.println("Abhinav Singh,2300320130012");
    }
}
