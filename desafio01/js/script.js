const input = document.querySelector('#input-text')
const btnEncrypt = document.querySelector('#encrypt')

const output = document.querySelector('#output')
const noOutput = document.querySelector('#no-output')
const withOutput = document.querySelector('#with-output')
const outputText = document.querySelector('#output-text')

function activeOutput() {
    noOutput.style.display = 'none'
    withOutput.style.display = 'flex'
    output.classList.add(['content'])
}

function desactiveOutput() {
    noOutput.style.display = 'block'
    withOutput.style.display = 'none'
}

function encryptLetter(letter){
    let returnedString

    if (letter == 'a') {
        returnedString = 'ai'
    } else if(letter == 'e'){
        returnedString = 'enter'
        
    } else if(letter == 'i'){
        returnedString = 'imes'
        
    } else if(letter == 'o'){
        returnedString = 'ober'
        
    } else if(letter == 'u'){
        returnedString = 'ufat'
    } else {
        returnedString = letter
    }

    return returnedString
}

function encryptText(text) {
    let encryptedString = '';

    for(let i = 0; i < text.length; i++){
        encryptedString += encryptLetter(text[i])
    }

    return encryptedString;
}

function encryptListener() {
    const encryptedText = encryptText(input.value.trim())
    if (encryptedText.length == 0){
        desactiveOutput()
        return 0;
    }
    outputText.textContent = encryptedText
    activeOutput()
}


function decrypt(subString){
    let letter = ''
    let nextPosition = 0

    if (subString.startsWith('ai')) {
        letter = 'a'
        nextPosition = 1
    } else if(subString.startsWith('enter')){
        letter = 'e'
        nextPosition = 4
    } else if(subString.startsWith('imes')){
        letter = 'i'
        nextPosition = 3
    } else if(subString.startsWith('ober')){
        letter = 'o'
        nextPosition = 3
    } else if(subString.startsWith('ufat')){
        letter = 'u'
        nextPosition = 3
    } else {
        letter = subString[0]
    }

    return [letter,nextPosition]
}

function decryptText(text) {
    let decryptedString = '';

    for(let i = 0; i < text.length; i++){
        let decryptedLetter = decrypt(text.substring(i, i+5))
        decryptedString += decryptedLetter[0]
        i += decryptedLetter[1]
    }

    console.log(decryptedString)

    return decryptedString;
}

function decryptListener() {
    const decryptedText = decryptText(input.value.trim())
    if (decryptedText.length == 0){
        desactiveOutput()
        return 0;
    }
    outputText.textContent = decryptedText
    activeOutput()
}

function copy() {
    navigator.clipboard.writeText(outputText.textContent)
}