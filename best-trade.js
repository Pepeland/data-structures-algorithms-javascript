function trade(prices) {
    if (prices.length === 1) {
      return 0;
    }
    const middle = Math.floor(prices.length / 2);
    const former = prices.slice(0, middle);
    const latter = prices.slice(middle);
    const case3 = Math.max(...latter) - Math.min(...former);
    return Math.max(trade(former), trade(latter), case3);
  }
  
  console.log(trade([27, 53, 07, 25, 33, 02, 32, 47, 43]));