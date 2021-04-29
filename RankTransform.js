/* COMPETITIVE GAME
Prompt: Assume that after playing a multiplayer game & getting total score,
players can level up according to their rank among other players.
Write function where given cutoff rank (k) & array of scores,
return the number of players who were able to level up based on their scores.


Input: k=3, score = [40,10,20,30]
Output: 3
Explanation: From the score, we know that the result rank for each player was [1,4,3,2].
Since cutoff is 3, there are 3 players who's level went up according to the score.

Step1: Write helper function (RankGenerator) to determine the ranking of each scores.
Given an array of integers arr, replace each element with its rank.
The larger the element, the smaller the rank. (so person with highest score gets first place)
If two elements are equal, their rank must be the same.

Example 1:
Input: arr = [40,10,20,30]
Output: [1,4,3,2]
Explanation: 40 is the largest element so gets 1st place. 10 is smallest so gets last (4th) place.

Example 2:
Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:
Input: arr = [40,40,10,20,30]
Output: [1,1,5,4,3]
Explanation: Same elements share the same rank, but the rank after that needs to
be accounted for how many peole got same rank. the last place must always be the number of players.

Approach:
Since we need to replace each element with its rank, we need to find the largest
element and assigned it to the smallest rank.
The easiest way to accomplish this is by sorting the input array in
decending order and then associating it with a rank.
The rank initial value = 1, then we need to check if the element does not exist
in our dictionary then add it to the dictionary and increase the rank by 1.


Step2: Using the rankGenerator, count how many players gets to level up.

Approach:
Iterate through the array of ranks, if the current rank value is less than or equal
to the cutoff rank (k), and increase the count. The count variable will represents
how many players were able to level up.
*/

function rankGenerator(scoreArr) {
  //Make a copy of the array and sort it
  let copyArr = [...scoreArr];
  let sortedArr = copyArr.sort((a, b) => b - a);

  //Assign ranks using a dictionary of key-value pairs, 'score': rank
  let rankMemo = {};
  let rank = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    //if memo doesn't include the score, then create key-value with score & rank. {"40": 1}
    if (!rankMemo[sortedArr[i]]) {
      rankMemo[sortedArr[i]] = rank;

      //increase rank by one each time so next time around, the rank has increased
      rank++;
    } else {
      //if score already exists in memo, keep the same ranking (don't change the key-value pairs)
      //but increase the rank value for next time ('1','1','1','4)
      rank++;
    }
  }

  //rankMemo = { '10': 5, '20': 4, '30': 3, '40': 1 }

  //transform the original array into ranks and return the result
  let rankResult = [];
  for (let i = 0; i < scoreArr.length; i++) {
    let rankVal = rankMemo[scoreArr[i]];
    rankResult.push(rankVal);
  }
  return rankResult;
}

function numPlayersLeveledUP(k, score) {
  //get array of ranks ex.[1,1,5,4,3]
  let rankArr = rankGenerator(score);

  //iterate through the rank array and count how many elements have
  //rank smaller than or equal to k (the cutoff)
  let count = 0;
  for (let i = 0; i < rankArr.length; i++) {
    if (rankArr[i] <= k) {
      count++;
    }
  }
  return count;
}

/*
Time Complexity: O(N log N)
- sorting algorithm is at best O(N log N) and at worst O(N^2)
- iterative method is O(N), as length of score grows, the more time it takes to iterate through each element.
- So in total, at worse, it's O(N^2), and at best O(N log N)

Space Complexity: O(N)
- as length of score array grows,more space it will take (more elements to score in memo),

*/
