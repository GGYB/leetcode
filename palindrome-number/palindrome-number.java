class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        int rev = 0;
        int x_bak = x;
        while (x != 0) {
            int pop = x % 10;
            x = x / 10;

            rev = rev * 10 + pop;
        }

        return x_bak == rev;
    }
}