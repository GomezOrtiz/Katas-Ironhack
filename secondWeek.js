// PERSISTENT BUGGER

const persistence = num => {
    let counter = 0
  
    const multiply = num => {
      return num.toString().split("")
        .map(elm => parseInt(elm))
        .reduce((acc, val) => acc * val)
    }
  
    const check = num => {
      while (num.toString().length !== 1) {
        counter++
        num = multiply(num)
      }
      return counter
    }
  
    return check(num)
  }
  
// FIND THE MISSING LETTER

function findMissingLetter(array){

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  
    if (array[0] === array[0].toUpperCase()) {
      alphabet = alphabet.map (letter => {
        return letter.toUpperCase()
      })
    }
    
    const firstIndex = alphabet.indexOf(array[0])
  
    for (let i = 0; i < array.length; i++){
      if (!(array[i] === alphabet[firstIndex + i])){
        return alphabet[firstIndex + i]
      }
    }
  
  }
  
// STREET FIGHTER 2

const streetFighterSelection = (fighters, position, moves) => {

    let selection = []
  
    moves.forEach (move => {
      switch(move){
        case "up":
          if(position[0] === 1) position[0]--
        break
        case "down":
          if(position[0] === 0) position[0]++
        break
        case "left":
          if (position[1] === 0) position[1] = fighters[1].length - 1;
          else position[1]--
        break
        case "right":
          if (position[1] === fighters[1].length - 1) position[1] = 0;
          else position[1]++
        break
      }
      selection.push(fighters[position[0]][position[1]])
    })
  
    return selection
  }
  
// PLAYING WITH DIGITS

function digPow(n, p){

    const arr = n.toString().split("")
    let result = 0
  
    arr.forEach((elm, idx) => {
      result += Math.pow(arr[idx], p + idx)
    })
  
    if (result % n === 0){
      k = result / n
    } else {
      k = -1
    }  
  
  return k
  
  }
  
    