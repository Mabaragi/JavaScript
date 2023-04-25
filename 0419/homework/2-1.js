function findQueens(n) {
  // col 배열 초기화
	let col = new Array(n)
  for (let i = 0; i < col.length; i++) {
    col[i] = 0
  }
  let dia1 = new Array(2 * n - 1)
  let dia2 = new Array(2 * n - 1)
  for (let i = 0; i < dia1.length; i++) {
    dia1[i] = 0
    dia2[i] = 0 
  }


  function dfs(i) {
    if (i === n) {
      ans += 1
    }
    for (let j = 0; j < n; j++) {
      if (col[j] === 0 && dia1[i + j] === 0 && dia2[n - 1 + i - j] === 0) {
        col[j] = 1
        dia1[i + j] = 1
        dia2[n - 1 + i - j] = 1
        dfs(i + 1)
        col[j] = 0
        dia1[i + j] = 0
        dia2[n - 1 + i - j] = 0
      }      
    }
  }
  dfs(0)

	return ans
}

ans = 0

console.log(findQueens(4)) // 2