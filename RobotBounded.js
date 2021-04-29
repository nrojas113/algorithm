/*ROBOT ROUNDED IN A CIRCLE

Prompt:
On an infinite plane, a robot initially stands at (0, 0) and faces north.
The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Example 1:
Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:
Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.

Example 3:
Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...


Approach:
1. Use numbers from 0 to 3 to makr the 4 directions (north, east, south, west)
   Create array of directions to store corresponding coordinate fhanges.
2. Create variable to keep track of current position (x , y) and direction
   Initialize with position (0, 0) on coordinates and direction to face north = 0
3. Iterate over the instructions determine which direction & position at the end of instruction
   If G, change the x & y variable to corresponding location
   If R, change the direction pointer based on predefined number (0, 1, 2, 3)
   If L, change the direction pointer based on predefined number (0, 1, 2, 3)
4. Finally, check the current direction/position based on what makes infinite circle :
   We know that robot is bounded (go in circle) if in case of below 2 patters:
     1. If starting position (0,0) is equals the ending position (0,0)
      OR
    2. If the ending direction is NOT north

*/

function isRobotBounded(instruction) {
  //Mark the direction: Up=0, Right=1, Down =2, Left= 3
  //Create array of directions, where we can store the corresponding coordinates changes.
  //Ex. directions[0] is to go up, directions[1] is to go right, directions[2] is to go down, directions[3] is to go left
  let directions = [
    [0, 1], // 0.UP
    [1, 0], // 1.Right
    [0, -1], // 2.Down
    [-1, 0], // 3.Left
  ];

  //Track x coordinate - initial robot position is in the center / coordinate 0 in x-axis
  let x = 0;

  //Track y coordinate - initial robot position is in the center / coordinate 0 in y-axis
  let y = 0;

  //Track current direction - initial robot direction is facing up /dir = 0
  let dir = 0;

  for (let i of instruction) {
    if (i === "G") {
      //if current instruction is to move, update the coordinates with 1 unit
      x += directions[dir][0]; // x = 0
      y += directions[dir][1]; // y = 1
    } else if (i === "R") {
      //if current instruction is to turn right, change the current direction to "Right" = 1
      //module is needed, because if current position is already right, go back to 0, and do nothing
      dir = (dir + 1) % 4;
    } else if (i === "L") {
      //if current instruction is to turn left, change the current direction to "Left" = 3
      dir = (dir - 1) % 4;
    }
  }

  //Return true if :
  //end up in the same point or
  //if robot is not facing north, it will eventually go back to the initial
  //position within the 4 times of repeating the instruction
  return (x === 0 && y === 0) || dir !== 0;
}

/*
Time Complexity: O(n), where N is a number of instructions to parse (how many Gs and Ls and Rs)
Space Complexity: O(1), because the array directions contains only 4 elements - doesn't take space

*/
