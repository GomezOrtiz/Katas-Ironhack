// NUMBER OF ANAGRAMS IN AN ARRAY OF WORDS

function anagramCounter (wordsArray) {
    var counter = 0
    for (i = 0; i < wordsArray.length; i++){
      for (var j = i+1; j < wordsArray.length; j++){
        if (isAnagram(wordsArray[i], wordsArray[j])){
          counter++
        }
      }
    }
      return counter
    }
    
    function normalize(word){
      word = word.toLowerCase().split("")
      word = word.sort()
      return word.join()
    }
    
    function isAnagram (word1, word2) {
      return normalize(word1) === normalize(word2)
    }

    // TGI FRIDAY

    function lastDayIsFriday(initialYear, endYear) {
        var fridays = 0
        if (endYear === undefined){
          fridays += lastDaysOfYear(initialYear)
        } else {
          for (var i = initialYear; i <= endYear; i++){
            fridays += lastDaysOfYear(i)
          }
        }  
        return fridays
      }
      
      function lastDayOfMonth (month,year){
        var lastDay = new Date(year, month + 1, 0);
      
        return lastDay.getDay()
      }
      
      function lastDaysOfYear (year){
        var counter = 0
        for (var i = 0; i < 12; i++){
          if (lastDayOfMonth(i,year) === 5){
            counter += 1
          }
        }
        return counter
      }

    // CLOCK MY CLOCK FACE

    var whatTimeIsIt = function(angle) {

        var degreesPerHour = 360 / 12
        var degreesPerMinute = degreesPerHour / 60
      
        var hours = Math.floor(angle / degreesPerHour)
      
        if (hours === 0){
          hours = 12
        }
      
        var minutes = Math.floor((angle % degreesPerHour) / degreesPerMinute)
      
        return normalize(hours, minutes);
      }
      
      function normalize (hours,minutes) {
      
        hours = hours.toString()
        minutes = minutes.toString()
      
        if (hours.length < 2){
          hours = "0" + hours
        }
        if (minutes.length < 2){
          minutes = "0" + minutes
        }
      
        return hours + ":" + minutes
      
      }

    // SORTING A 2D ARRAY

    function namesSorter (departmentsArray) {

        var company = []
      
        departmentsArray.forEach (function (name) {
          name.forEach (function (name) {
            company.push(name)
          })
        })
      
        var sorted = company.sort(function(a,b) {
          return a.length - b.length || a.localeCompare(b)
        
        })
      
        return sorted;
      }
      