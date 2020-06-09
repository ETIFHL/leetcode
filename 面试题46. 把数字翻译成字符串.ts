function translateNum(num: number): number {
    if (num < 10) {
        return 1
    }
    const str: string = num.toString()
    const arr: Array<number> = [1, 1]
    for (let i = 1; i < str.length; ++i) {
        if (str[i - 1] === '0' || parseInt(str[i - 1] + str[i]) > 25) {
            arr.push(arr[i])
        } else {
            arr.push(arr[i] + arr[i - 1])
        }
    }
    return arr[str.length]
};

  // 1 > [1] 1 
  // 12 > [1,2][12] 2
  // 122 > [1,2,2][12,2][1,22] 3
  // 1225 > [1,2,2,5][12,2,5][1,22,5][1,2,25][12,25] 5
  // dp，fiber规律
