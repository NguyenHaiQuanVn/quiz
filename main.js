const Quiz = [
    {
        question: "Vì sao ta nhìn thấy một vật?",
        a: "Vì mở mắt hướng về vật",
        b: "Vì mắt phát ra tia sáng",
        c: "Vì ánh sáng truyền từ vật vào mắt ta",
        d: "Vì vật chiếu sáng",
        correct: "c"
    },
    {
        question: "Trong các vật sau đây, vật nào là nguồn sáng:",
        a: "Quyển sách",
        b: "Mặt Trời",
        c: "Mặt Trăng",
        d: "Bóng đèn bị đứt dây tóc",
        correct: "b"
    },
    {
        question: "Ảnh của vật tạo bởi gương là:",
        a: "Hình của một vật quan sát được trong gương",
        b: "Hình của một vật quan sát được sau gương",
        c: "Hình của một vật quan sát được trên màn qua gương",
        d: "Hình của một vật quan sát được trên màn",
        correct: "a"
    },
    {
        question: "Trong các vật sau đây, vật nào có thể được coi là một gương phẳng?",
        a: "Mặt phẳng của tờ giấy",
        b: "Mặt nước đang gợn sóng",
        c: "Mặt phẳng của một tấm kim loại nhẵn bóng",
        d: "Mặt đất",
        correct: "c"
    },
    {
        question: "Vật phát ra âm khi nào?",
        a: "Khi nén vật",
        b: "Khi làm vật dao động",
        c: "Khi uốn cong vật",
        d: "Khi kéo căng vật",
        correct: "b"
    }
]
console.log(Quiz[0]);
const question = document.querySelector('h2')
const a__text = document.querySelector('#a__text')
const b__text = document.querySelector('#b__text')
const c__text = document.querySelector('#c__text')
const d__text = document.querySelector('#d__text')
const input = document.querySelectorAll('input')
const btn = document.querySelector('button')
const box = document.querySelector('.box')
let currentQuestion = 0
let correct = 0



function loadQuestion() {
    let data = Quiz[currentQuestion]
    question.innerText = data.question
    a__text.innerText = data.a
    b__text.innerText = data.b
    c__text.innerText = data.c
    d__text.innerText = data.d
    input.forEach(function (value, index) {
        value.checked = false
    })
}
loadQuestion()
function selectAnswer() {
    let check = null
    input.forEach(function (value, index) {
        if (value.checked) {
            return check = value.id
        }
        // value.onclick=(e) => {
        //   if(e.target.id===Quiz[currentQuestion].correct){
        //     correct++
        //     console.log(correct)
        //   }
        // }
    })
    return check
}

btn.onclick = function (e) {
    e.preventDefault()
    selectAnswer()
    let ac = selectAnswer()
    console.log(ac)
    if (ac) {
        if (ac === Quiz[currentQuestion].correct) {
            correct++
        }
        currentQuestion++

        if (currentQuestion < Quiz.length) {
            loadQuestion()
        }
        else {
            box.innerHTML = `<h2>Số câu trả lời đúng:${correct}/5<h2>
            <button>Quay lại</button>`
        }

    }


}