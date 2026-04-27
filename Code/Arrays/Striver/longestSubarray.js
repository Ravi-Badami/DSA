let nums = [10, 5, 2, 7, 1, 9],
  k = 15;

function solution(nums, k) {
  let left = 0;
  let sum = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > k && left <= right) {
      sum -= nums[left];
      left++;
    }

    if (sum === k) result = Math.max(result, right - left + 1);
  }

  console.log(result);
}
solution(nums, k);
