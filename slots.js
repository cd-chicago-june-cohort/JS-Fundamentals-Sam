function slots(quarters) {
    for (quarters; quarters > 0; quarters--) {
        var winningNum = Math.floor(Math.random() * 100);
        var myNum = Math.floor(Math.random() * 100);
        if (winningNum == myNum) {
            var prize = Math.floor((Math.random() * 50) + 50);
            //console.log(quarters);
            return (quarters + prize);
        }
    }
    return 0;
}

console.log(slots(60));