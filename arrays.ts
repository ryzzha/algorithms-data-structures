function binSearch(array: number[], element: number): number | null {
    let low = 0;
    let higth = array.length - 1;
    let i = 0;

    while(low <= higth) {
        i++;
        let mid = Math.floor((low + higth) / 2);
        const midValue = array[mid];

        if(element == midValue) {
            console.log(`steps: ${i}`)
            return midValue
        } else if(element < midValue) {
            higth = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const findedElement = binSearch(array, 8);

console.log(findedElement)


function bubleSort(array: number[]): number[] {
    const n = array.length - 1;
    const result = [...array];
    let it = 0

    for(let i = 0; i < n; i++) {
        it += i;
        for(let j = 0; j < n - i; j++) {
            it += j;
            if(result[j] < result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }

    console.log("iterations -> " + it)
    return result;
}

const arrayTwo = [7,5,2,2,1,0,6];

const sortedArray = bubleSort(array);

console.log(sortedArray)

function selectionSort(array: number[]): number[] {
    const n = array.length - 1;
    const result = [...array]; 
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (result[j] < result[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [result[i], result[minIndex]] = [result[minIndex], result[i]];
      }
    }
  
    return result;
  }
  
  const nums2 = [64, 25, 12, 22, 11];
  console.log("Selection sort:", selectionSort(nums2));
  