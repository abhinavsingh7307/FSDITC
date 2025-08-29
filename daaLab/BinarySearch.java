import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        
        System.out.println("Enter elements in sorted order: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        
        System.out.print("Enter element to search: ");
        int key = sc.nextInt();

        
        int left = 0, right = n - 1;
        int index = -1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (arr[mid] == key) {
                index = mid;
                break;
            } else if (arr[mid] < key) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }

        
        if (index == -1) {
            System.out.println("Element not found in array.");
        } else {
            System.out.println("Element found at index: " + index);
        }

        sc.close();

        System.out.println("Abhinav Singh,2300320130012");
    }
}
