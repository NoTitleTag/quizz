const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];


const form = document.querySelector("form")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    
    const result = []
    let textResult = document.querySelector(".text-result")
    
    textResult.style.display = "none"
    
    const btnRadio = document.querySelectorAll("input[type='radio']:checked")

    btnRadio.forEach((input, index) => {
            if(input.value === responses[index]) {
            return result.push(true)
            } else {
                return result.push(false)
            }
        
        
})
    showResults(result)
    addColors(result)
}

    
    function showResults(result) {
        let textResult = document.querySelector(".text-result")
        let firstResult = document.querySelector(".first-result")
        let secondResult = document.querySelector(".second-result")
        let thirdResult = document.querySelector(".third-result")

        let wrongResponse;
        if (result.length === responses.length) {
            wrongResponse = result.filter(el => el === false).length
        }


        switch (wrongResponse) {
        case 0:
            firstResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Quelle culture ... 🎉`
            break
        case 1:
            firstResult.textContent = `✨ Vous y êtes presque ! ✨`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Retentez une autre réponse dans les cases rouges, puis re-validez !`
            break
        case 2:
            firstResult.textContent = `✨ Encore un effort ... 👀`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Retentez une autre réponse dans les cases rouges, puis re-validez !`
            break
        case 3:
            firstResult.textContent = `👀 Il reste quelques erreurs. 😭`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Retentez une autre réponse dans les cases rouges, puis re-validez !`
            break
        case 4:
            firstResult.textContent = `😭 Peut mieux faire ! 😭`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Retentez une autre réponse dans les cases rouges, puis re-validez !`
            break
        case 5:
            firstResult.textContent = `👎 Regarde TBBT, c'est plus simple ! 👎`
            secondResult.textContent = `score : ${responses.length - wrongResponse} / ${responses.length}`
            thirdResult.textContent = `Cas désespéré 🤣`
            break
        default:
            textResult.style.display = "block"
            textResult.textContent = `
            Essaie de remplir toutes les questions 😊`    

    }
}

const containerQuestions = document.querySelectorAll(".container")

function addColors(result) {

    if (result.length === responses.length) {
        result.forEach((response, index) => {
            if(result[index]) {
                containerQuestions[index].style.backgroundImage = "linear-gradient(to right, #56ab2f, #a8e063)"
            }
            else {
                containerQuestions[index].style.backgroundImage = "linear-gradient(to right, #93291E, #ED213A)"
            }
        })
    }


}