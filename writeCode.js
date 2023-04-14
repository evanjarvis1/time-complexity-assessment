array = [`hi`, `hello`]
string = 'The quick brown fox jumps over the lazy dog.'

const addToZero = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
        if (arr[i] + arr[j] === 0) {
            return true
        }
    }
    }
    return false
}

//time complexity O(n)
//space complexity O(n)


const hasUniqueChars = (str) => {

    let stringArr = str.split("")
    //console.log(stringArr)
    let arr2 = []

    for (let i = 0; i < stringArr.length; i++) {
        if (arr2.includes(stringArr[i])) {
            return false
        } else {
            arr2.push(stringArr[i])
        }
    }

    return true
}

// time complexity O(n^2)
//space complexity O(n^2)

const isPangram = (str) => {
    let lowerCase = str.toLowerCase()

    let alphabet = `abcdefghijklmnopqrstuvwxyz`

    let alphabetArr = alphabet.split(``)

    for (let i = 0; i < alphabetArr.length; i++) {
        if (str.includes(alphabetArr[i])) {
            //do nothing
        } else {
            return false
        }

        return true
    }
}

// time complexity O(n)
//space complexity O(n)

const findLongestWord = (arr) => {

    let longestLength = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length
        }
    }

    return longestLength
}

// timeComplexity O(n)
//space Complexity O(n)

console.log(findLongestWord(array))