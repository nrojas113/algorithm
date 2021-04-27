## Elementary Sorting Algorithms

### Comparing Bubble Sort, Selection Sort, Insertion Sort

| Algorithm      | Time Complexity (Best) | Time Complexity (Worse) | Space Complexity |
| -------------- | ---------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(n)                   | O(n^2)                  | O(1)             |
| Insertion Sort | O(n)                   | O(n^2)                  | O(1)             |
| Selection Sort | O(n^2)                 | O(n^2)                  | O(1)             |

### Explanation

Bubble Sort :<br />
Best case - if nearly sorted array, very few swaps, performs well

Insertion Sort :<br />
Best case - if nearly sorted array, very few swaps, performs well <br />
Pros - if you need element to be continuously sorted <br />
(data coming in, to maintain running sort), insertion works well (only need single pass)

Selection Sort :<br />
Best case - even when nearly sorted array, always iterate until the end and find the minimum value<br />
Pros - Very simple to understand (only positive)

Space Complexity :<br />
Not creating new arrays or any variable for each element, not using space at all
