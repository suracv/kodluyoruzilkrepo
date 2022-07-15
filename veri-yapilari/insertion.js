// [22,27,16,2,18,6] -> Insertion Sort

// 1.Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
// ANSWER
// [22,27,16,2,18,6]
// [16,22,27,2,18,6]
// [2,16,22,27,18,6]
// [2,16,18,22,27,6]
// [2,6,16,18,22,27]

// 2.Big-O gösterimini yazınız.
// ANSWER
// O(n²)

// 3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

// ANSWER
// Average case: O(n²)
// Worst case: O(n²)
// Best case: O(n)

// 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
// ANSWER
// Average case


// 5.[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
//ANSWER
// [3,7,5,8,2,9,4,15,6]
// [3,5,7,8,2,9,4,15,6]
// [3,5,7,8,2,9,4,15,6]
// [2,3,5,7,8,9,4,15,6]

const insertion = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }
  console.log(insertion([22,27,16,2,18,6]));
  console.log(insertion([7,3,5,8,2,9,4,15,6]));
  