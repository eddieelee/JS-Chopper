function chopper(arr, excess) {
    //start to remove 0 from array and how many elements to remove
    arr.splice(0,excess);
    return arr;
}

//remove 2 elements from index 0
chopper(['aaa','bbb','a','b','c','d','e'],2);
// ["a", "b", "c", "d", "e"]