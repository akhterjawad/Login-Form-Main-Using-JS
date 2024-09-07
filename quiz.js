let questions_array = []
let arrayIndex = 0
let correctAnswers = 0
let wrongAnswers = 0


const quiz = document.querySelector('.quiz')
const next_btn = document.querySelector('#next-btn')
// const loginUser = JSON.parse(localStorage.getItem('loginUser'));

// check user us login or not

// if (!loginUser.condition || loginUser == null) {
//     window.location = 'index.html'
// }


// getData from api 

const getData = async () => {

    try {
        const res = await axios("https://the-trivia-api.com/v2/questions")
        console.log(res);

        questions_array = res.data
        console.log(questions_array);
        RenderQuestion(arrayIndex)
    } catch (error) {
        console.log(error);
    }
}
getData()

function RenderQuestion(arrayIndex) {
    let RenderQuestionData = questions_array[arrayIndex]
    let answers_array = [...RenderQuestionData.incorrectAnswers, RenderQuestionData.correctAnswer];
    console.log(answers_array);
    answers_array = answers_array.sort(() => Math.random() - 0.5);
    quiz.innerHTML += `<h2 id="question">Q ${arrayIndex + 1} : ${RenderQuestionData.question.text}</h2>
        <div id="answer-buttons">
            ${answers_array.map((item) => `<button  onclick="CheckingAnswer(event,${arrayIndex})" class="btn">${item}</button>`).join('')}
        </div>`;

}