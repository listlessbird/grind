import java.util.ArrayList;

public class MinStack {
    private ArrayList<Integer> stack;
    private ArrayList<Integer> auxStack;
    public MinStack() {
        this.stack = new ArrayList<>(10);
//        to track the min element
        this.auxStack = new ArrayList<Integer>(10);
    }

    public void push(int val) {
        if(!auxStack.isEmpty()) {
            int lastMin = getMin();
            if(val <= lastMin) auxStack.add(val);
        } else {
            auxStack.add(val);
        }

        this.stack.add(val);
    }

    public void pop() {

        if(stack.isEmpty()) {
            return;
        }
        if(top() == getMin()) auxStack.remove(auxStack.size() - 1);
        stack.remove(stack.size() - 1);
    }

    public int top() {
        return this.stack.get(this.stack.size() - 1);
    }
    public int getMin() {
        if(auxStack.isEmpty()) {
            return  0;
        }
        return auxStack.get(auxStack.size() - 1);
    }
}
