function minMax(array) {
    let min = array[0],
        max = array[0],
        sum = array[0],
        i, v;
    
    for (i = 1; i < array.length; i++) {
        v = array[i];
        sum = sum + v;
        if (v > max) max = v;
        if (v < min) min = v;
    }
    console.log(sum - max, sum - min);
}

minMax([1, 2, 3, 4, 5]);

// 10 14