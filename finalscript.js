// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "Q1/12: Mi đang ngồi trên xe bus trên đường về nhà. Một ngày dài làm việc, mi đang nghĩ gì?",
        image: "images/Q1.gif",
        answers: {
            F: {
                text: "mệt vcl, về nhà nghỉ ngơi thôi. Sao mỗi ngày cứ giống nhau thế này...",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Nên nghỉ trước hay làm việc trước khi về nhà? Quan trọng nhất là tối nay ăn gì?",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q2/12: Mi nhìn ra ngoài cửa sổ, trời sắp mưa rồi. Bất ngờ, mọi thứ trở nên tối đen",
        image: "images/Q2.gif",
        answers: {
            J: {
                text: "Chết mẹ lạc ra hầm thủ thiêm rồi. *Móc điện thoại ra xem bản đồ*",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "*Quay lại nhìn xem mọi người có bình tĩnh không* Có nên hỏi người ta không?",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "Q3/12: Trước khi mi kịp làm gì, xe bus dừng lại và mọi thứ xung quanh mi bắt đầu bay lên!",
        image: "images/Q3.gif",
        answers: {
            S: {
                text: "Lạ vãi ò, mình đang mơ à? *nhéo tay*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Khứa nào giỡn mất dạy? Hay là mình đang bị bắt cóc bởi người ngoài hành tinh?!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q4/12: Trong đám hỗn loạn, mi thấy thứ gì đó lướt qua cửa sổ.",
        image: "images/Q4.gif",
        answers: {
            F: {
                text: "Woahh...mèo nhiều vãi! Dễ huông, dễ huông!! Cho ôm cái coi!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Mèo? Ngoài vũ trụ? Lạ thế... Chúng sống được như thế nào vậy?!",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q5/12: 'Mừng cưng lên tàu' một robot nhỏ xuất hiện và nói, 'Chúng ta sẽ đến nơi trong 5 tháng 6 ngày và 2 giờ nữa!'",
        image: "images/Q5.gif",
        answers: {
            P: {
                text: "Cool! A space cruise?! Where are we going? Do I get a spacesuit? This is so exciting!",
                text: "Ngon! Du lịch vũng tàu, à lộn, tàu vũ trụ à? Mình đi đâu? Có được mặc áo phi hành da heo không? Thích quá!",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "Ừm...Mình ở đâu vậy? Làm sao mình lại ở đây? Khi nào mình về nhà?! Tại sao...",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q6/12: Con robot chỉ vào phía sau xe bus, giờ trông giống bên trong một tàu vũ trụ hơn! Mi muốn xem cái gì trước?",
        image: "images/Q6.gif",
        answers: {
            I: {
                text: "Thái dương hệ có đài phun nước ở giữa. Mình muốn chụp ảnh với nó",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "Cozy corner with a massaging chair. I need to sit down and process.",
                text: "Góc nhỏ với ghế massage. Mình cần ngồi xuống để xem cái qq j đang xảy ra z",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q7/12: Trên đường trở lại ghế, mi bị bao quanh bởi mèo! 'Phát hiện hành khách trái phép, BẮT LẤY BẮT LẤY!'",
        image: "images/Q7.gif",
        answers: {
            S: {
                text: "Bé ơi từ từ! trái phép là seo ? mình là hành khách của tàu này!",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Kê, mình không hiểu gì đang xảy ra. Sao mình không ngồi xuống và đàm đạo chút nhỉ?",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q8/12: Bất ngờ, con robot lướt qua, nó nói cái gì đó với mèo khiến chúng dừng lại.",
        image: "images/Q8.gif",
        answers: {
            E: {
                text: "Bob!! Mơn nhe! Mày đến cứu tao à?",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "HA! Đúng rồi! Lui lại đi mấy con mồn! Mình an toàn rồi chứ?!",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q9/12: Con robot biến thành cái máy hút bụi khổng lồ, con mèo dùng nó chĩa vào mi!",
        image: "images/Q9.gif",
        answers: {
            J: {
                text: "Quăng áo để đánh lạc hương chúng, chạy về phía biển báo 'EXIT' màu xanh lớn!",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Chạy tùm lum, làm loạn hệ tiền đình của chúng, hòa mình vào đám đông!",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q10/12: Mi chạy qua cửa hàng quà tặng. Có vẻ như mi đã thoát khỏi chúng. Mua vài món quà lưu niệm cũng không tồi chứ?",
        image: "images/Q10.gif",
        answers: {
            F: {
                text: "Get the Jupiter headphone, wear it to hear people's thoughts!",
                text: "Lấy tai nghe Mộc Tinh, đeo vào để nghe được suy nghĩ của người khác! ",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Lấy đồng hồ Hỏa Tinh, quay nó và bạn có thể du hành thời gian!",
                scores: { F: 0, T: +1 },
            },
        },

    },
    {
        question: "Q11/12: Máy hút bụi khổng lồ đột nhiên xuất hiện trước mặt mi! Mi bị hút vào trong vòng xoáy của nó!!!",
        image: "images/Q11.gif",
        answers: {
            S: {
                text: "Ổn mà, mình chỉ đang mơ thôi! Mình sẽ tỉnh ngay thôi! *đóng mắt và từ bỏ*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Mình sẽ tìm cách thoát ra! Có lẽ có cửa bí mật nào đó! *nhìn xung quanh để tìm cách thoát ra*",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q12/12: Sau một khoảng thời gian tối đen, mi thấy mình đang ngồi trên xe bus. 'Con ổn chứ?' người kiểm tra vé hỏi",
        image: "images/Q12.gif",
        answers: {
            I: {
                text: "Woah! Mình tưởng mình bị bắt... Thôi! Mình ổn rồi, chắc là vậy? *hoảng sợ trong im lặng*",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Chú không tin được đâu...Con nghĩ mình vừa có một giấc mơ điên rồ! *kể về cuộc phiêu lưu vũ trụ của mình*",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "Khi mi nhìn lên, người kiểm tra vé đã biến mất. Mi nhìn ra ngoài cửa sổ, mọi thứ trở nên tối đen khi xe bus đi qua một hầm khác...",
        image: "images/Q13.gif",
        answers: {
            K: {
                text: "Khoan... Bob đó hả",
            },
            U: {
                text: "Trời mé... nữa sao",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "1DE.png",
    },
    "ISFJ": {
        image: "2light.png"
    },
    "INFJ": {
        image: "3UFO.png"
    },
    "INTJ": {
        image: "4nebula.png"
    },
    "ISTP": {
        image: "5comet.png"
    },
    "ISFP": {
        image: "6ST.png"
    },
    "INFP": {
        image: "7DM.png"
    },
    "INTP": {
        image: "8met.png"
    },
    "ESTP": {
        image: "9BH.png"
    },
    "ESFP": {
        image: "10Sn.png"
    },
    "ENFP": {
        image: "11Grav.png"
    },
    "ENTP": {
        image: "12hand.png"
    },
    "ESTJ": {
        image: "13sat.png"
    },
    "ESFJ": {
        image: "14sun.png"
    },
    "ENFJ": {
        image: "15gal.png"
    },
    "ENTJ": {
        image: "16rocket.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


