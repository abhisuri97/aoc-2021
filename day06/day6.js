const fs = require('fs');

function day6gen(days) {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) { console.log(err); return }
    var arr = data.split(',').map(i => Number(i))
    var states = [0,0,0,0,0,0,0,0,0]
    arr.forEach((i) => { states[i] += 1 })
    for (var i = 0; i < days; i++) {
      var s = states.shift();
      states.push(s)
      states[6] += s
    }
    console.log(states.reduce((acc,c) => acc+c, 0))
  })
}

day6gen(80)
day6gen(256)
