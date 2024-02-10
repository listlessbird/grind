public class Main {
    public static void main(String[] args) {
        MinStack obj = new MinStack();
        obj.push(2);
        obj.push(0);
        obj.push(3);
        obj.push(0);
        System.out.println(obj.getMin()); // Output: 0
        obj.pop();
        System.out.println(obj.getMin()); // Output: 0
        obj.pop();
        System.out.println(obj.getMin()); // Output: 0
        obj.pop();
        System.out.println(obj.getMin()); // Output: 2
    }
}
