function printRange(start, stop, skip) {
    if (!skip) {
        skip = 1;
    }
    if (!stop) {
        stop = start;
        start = 0;
    }
    for (var i = start; i < stop; i+=skip) {
        console.log(i);
    }
}
printRange(2, 10, 2);
printRange(2, 10);
printRange(10);