function reverseText(text){

    let textReverse = "";

    console.log(text.length - 1)

    for (let i = text.length - 1; i >= 0; i--) {
        textReverse += text[i];
    }

    console.log(`A string invertida é: ${textReverse}`);
}


//Insira apenas string.

reverseText('Charles')