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

    const scramble = (str1, str2) => {

      let checked = {}
    
      for (let i = 0; i < str2.length; i++){

        let letter = str2[i] 

        // Busco la letra de la cadena 2 en la cadena 1 y me guardo su posición. Si la letra ya había sido comprobada previamente (está en checked), quiero mirar a partir del que fue su primer índice; si no, desde el principio de la cadena
        let idxInFirst = letter in checked ? str1.indexOf(letter,checked[letter] + 1) : str1.indexOf(letter) 

        // Si no la ha encontrado (índice negativo), retorno false. Si la ha encontrado, actualizo el índice en checked para la próixima vez que tenga que buscar la misma letra
        if(idxInFirst >= 0) checked[letter] = idxInFirst 
        else return false
      }
      // Si no he retornado false en ningún momento del bucle, todas las letras estaban. Retorno true. 
      return true
    }
    