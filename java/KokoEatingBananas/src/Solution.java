public class Solution {
    public int minEatingSpeed(int[] piles, int h) {

        int minK = 1;
        int maxK = 1;

        for (int el:
             piles) {
            maxK = Math.max(maxK, el);
        }

        while (minK < maxK) {
            int rate = (minK + maxK) / 2;

            int spent = 0;

            for(int pile: piles) {
                spent += (int) Math.ceil((double) pile / rate);
            }

           if(spent <= h) {
               maxK = rate;
           } else {
               minK = rate + 1;
           }

        }
        return maxK;
    }

}
