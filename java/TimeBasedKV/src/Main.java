import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        TimeMap tm = new TimeMap();
        tm.set("foo", "bar", 1);
        String out = tm.get("foo", 1);
        System.out.println(out);
        tm.set("foo", "bar2", 4);
        out = tm.get("foo", 6
        );
        System.out.println(out);
    }
}
