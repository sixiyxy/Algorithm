//机器人的运动范围
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    // 位数和
    function getSum(num) {
        let answer = 0;

        while(num) {
            answer += num % 10;
            num = Math.floor(num / 10);
        }

        return answer;
    } 
    // 方向数组
    const directionAry = [
        [-1, 0], // 上
        [0, 1], // 右
        [1, 0], // 下
        [0, -1] // 左
    ];

    // 已经走过的坐标
    let set = new Set(['0,0']);

    // 将遍历的坐标队列，题意要求从[0,0]开始走
    let queue = [[0, 0]];

    // 遍历队列中的坐标
    while(queue.length) {
        // 移除队首坐标
        let [x, y] = queue.shift();

        // 遍历方向
        for(let i = 0; i < 4; i++) {
            let offsetX = x + directionAry[i][0];
            let offsetY = y + directionAry[i][1];

            // 临界值判断
            if(offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
                continue;
            }

            // 走过的格子就不再纳入统计
            set.add(`${offsetX},${offsetY}`);

            // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
            queue.push([offsetX, offsetY]);
        }
    }

    // 走过坐标的个数就是可以到达的格子数
    return set.size;
};

//可简化 增量公式和向右下移动
var movingCount = function(m, n, k) {
    
    var dfs = function(i, j, si, sj){
        if(i >= m || j >= n || k < si + sj || visited[i][j]) return 0;
        visited[i][j] = true;
        return 1 + dfs(i + 1, j, (i + 1) % 10 != 0 ? si + 1 : si - 8, sj) + dfs(i, j + 1, si, (j + 1) % 10 != 0 ? sj + 1 : sj - 8);
    }

    const visited = Array.from(Array(m), () => Array(n).fill(false));
    return dfs(0,0,0,0);
}
    