// ALL THAT IS OPEN MUST BE CLOSED

const isBalanced = (s, caps) => {
    let symbols = caps.split("").map(e => e.charCodeAt())
    let filtered = s.split("").filter(e => symbols.some(e2 => e.charCodeAt() === e2)).map(e => e.charCodeAt())
  
  const checkPair = (first,second) => second === symbols[symbols.indexOf(first) + 1]
  
    if (filtered.length % 2 === 0) {
      return filtered.every((e,idx) => {
        if (idx + 1 > filtered.length / 2) return true 
        else return checkPair(e,filtered[filtered.length - (idx+1)]) || checkPair(e,filtered[idx+1]) || checkPair (filtered[idx -1], e)
      })
    } else return false
    
  }

  // DIRECTIONS REDUCTION

  function dirReduc(arr){

    const removePairs = arr => {
      let newArr = arr.filter((direction,idx) => {
        return (
              (direction === "NORTH" && (arr[idx - 1] !== "SOUTH" || (arr[idx-1] === "SOUTH" && arr[idx-2] === "NORTH")) && arr[idx + 1] !== "SOUTH") ||
              (direction === "SOUTH" && (arr[idx - 1] !== "NORTH" || (arr[idx-1] === "NORTH" && arr[idx-2] === "SOUTH")) && arr[idx + 1] !== "NORTH") ||
              (direction === "EAST" && (arr[idx - 1] !== "WEST" || (arr[idx-1] === "WEST" && arr[idx-2] === "EAST")) && arr[idx + 1] !== "WEST") ||
              (direction === "WEST" && (arr[idx - 1] !== "EAST" || (arr[idx-1] === "EAST" && arr[idx-2] === "WEST")) && arr[idx + 1] !== "EAST")
            )
      })
      
      return newArr
    }
  
    let result = removePairs(arr)
    if (result !== removePairs(result)) result = removePairs(result) 
  
    return result
  
  }

  // PETE THE BAKER

  function cakes(recipe, available) {

    let canBake = 0
    
    for (let ingredient in recipe){
      if (!available.hasOwnProperty(ingredient)) return 0;
      else if (!canBake) canBake = Math.floor(available[ingredient] / recipe[ingredient]);
      else if (canBake > Math.floor(available[ingredient] / recipe[ingredient]))canBake = Math.floor(available[ingredient] / recipe[ingredient]);
    }
    return canBake
    }

    // SUM OF PAIRS

    const sum_pairs = (ints, s) => {

        let valuesChecked = {}
        let currentPair = 0
        let result = []
        
          ints.some(num => {
            currentPair = s - num
            if(currentPair in valuesChecked) {
              result = [currentPair, num]
              return true
            }
            valuesChecked[num] = "popino"
          })
        
        if (result.length > 0) return result
        }
    
    // SCRAMBLIES