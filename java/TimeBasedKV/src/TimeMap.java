import javax.xml.crypto.Data;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class TimeMap {

    Map<String,ArrayList<Data>> kv;
    public TimeMap() {
        this.kv = new HashMap<String, ArrayList<Data>>();
    }

    void set(String key, String value ,int timestamp) {
        System.out.println("k : " + key + " value: " + value + " timestamp: " + timestamp);
        if(!kv.containsKey(key)) {
            ArrayList<Data> dataList = new ArrayList<>();
            kv.put(key, dataList);
        }

        ArrayList<Data> e = kv.get(key);
        e.add(new Data(value, timestamp));
    }

    String get(String key, int timestamp) {
        if(!kv.containsKey(key)) return "";
        ArrayList<Data> list = kv.get(key);
        return search(list, timestamp);
    }

    <T extends Data> String search(ArrayList<T> list, int timestamp) {
        int left = 0;
        int right = list.size() - 1;

//        to keep track of potential less timestamps
        int res = -1;
        while (left <= right) {
            int mid = (left + right) / 2;
            Data el = list.get(mid);

            if(el.timestamp == timestamp) {
                return el.value;
            }

            if(el.timestamp > timestamp) {
                right = mid - 1;
            } else {
//                set as a potential result.
                res = mid;
                left = mid + 1;
            }
        }
//        return the timestamp - 1   if required doesn't exist

        if(res == -1) return "";
        return list.get(res).value;
    }

    class Data {
        String value;
        int timestamp;

        public Data(String val, int timestamp) {
            this.timestamp = timestamp;
            this.value = val;
        }

        @Override
        public String toString() {
            return "{ timestamp: " + timestamp + " , value: " + value + " }";
        }
    }


}
