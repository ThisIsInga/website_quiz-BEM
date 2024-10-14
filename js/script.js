// частицы

window.onload = function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
};



//музыка
document.getElementById('play-button').addEventListener('click', function() {
    var music = document.getElementById('background-music');
    
    // Изменяем изображение при клике
    if (music.paused) {
        music.play().catch(function(error) {
            alert('Ошибка воспроизведения музыки:', error);
        });
        // Изменяем изображение на "play"
        this.src = 'img/music-on.png';
    } else {
        music.pause();
        // Возвращаем изображение на "mute"
        this.src = 'img/music-mute.png';
    }
});



//вопросы
const DATA = [
    {
        question: 'Как правильно писать класс для блока с именем "header"?',
        answers: [
            {
                id:'1',
                value: 'header',
                correct: true,
            },
            {
                id:'2',
                value: 'Header',
                correct: false,
            },
            {
                id:'3',
                value: 'header-block',
                correct: false,
            },
        ]
    },
    {
        question: 'Как правильно обозначить элемент "logo" внутри блока "header"?',
        answers: [
            {
                id:'4',
                value: 'header:logo',
                correct: false,
            },
            {
                id:'5',
                value: 'header__logo',
                correct: true,
            },
            {
                id:'6',
                value: 'header-logo',
                correct: false,
            },
        ]
    },

    {
        question: 'Как правильно обозначить модификатор "large" для элемента "button"?',
        answers: [
            {
                id:'7',
                value: 'button--large',
                correct: true,
            },
            {
                id:'8',
                value: 'button-large',
                correct: false,
            },
            {
                id:'9',
                value: 'large-button',
                correct: false,
            },
        ]
    },

    {
        question: 'Как правильнее всего написать класс для элемента "item" с модификатором "active" внутри блока "menu"?',
        answers: [
            {
                id:'10',
                value: 'menu:item--active',
                correct: false,
            },
            {
                id:'11',
                value: 'menu-item_active',
                correct: false,
            },
            {
                id:'12',
                value: 'menu__item--active',
                correct: true,
            },
        ]
    },

    {
        question: 'Как правильно обозначить элемент "title" с модификатором "highlight" в блоке "card"?',
        answers: [
            {
                id:'13',
                value: 'card_title_highlight',
                correct: false,
            },
            {
                id:'14',
                value: 'card__title--highlight',
                correct: true,
            },
            {
                id:'15',
                value: 'card:title--highlight',
                correct: false,
            },
        ]
    },

    {
        question: 'Что означает аббревиатура БЭМ?',
        answers: [
            {
                id:'16',
                value: 'Базовый Элемент Механики',
                correct: false,
            },
            {
                id:'17',
                value: 'Блок, Элемент, Модификатор',
                correct: true,
            },
            {
                id:'18',
                value: 'Блокировка Элемента Модуля',
                correct: false,
            },
        ]
    },

    {
        question: 'Что в БЭМ считается "блоком"?',
        answers: [
            {
                id:'19',
                value: 'Независимая часть интерфейса',
                correct: true,
            },
            {
                id:'20',
                value: 'Любой HTML-тэг',
                correct: false,
            },
            {
                id:'21',
                value: 'Вложенный элемент в блоке',
                correct: false,
            },
        ]
    },

    {
        question: 'Какой символ используется для обозначения элемента в БЭМ?',
        answers: [
            {
                id:'22',
                value: 'Точка',
                correct: false,
            },
            {
                id:'23',
                value: 'Дефис',
                correct: false,
            },
            {
                id:'24',
                value: 'Подчеркивание',
                correct: true,
            },
        ]
    },

    {
        question: 'Что обозначает модификатор в БЭМ?',
        answers: [
            {
                id:'25',
                value: 'Состояние или внешний вид блока или элемента',
                correct: true,
            },
            {
                id:'26',
                value: 'Специфический метод программирования',
                correct: false,
            },
            {
                id:'27',
                value: 'Уникальный идентификатор блока',
                correct: false,
            },
        ]
    },

    {
        question: 'Как правильно записать класс для элемента с модификатором в БЭМ?',
        answers: [
            {
                id:'28',
                value: 'block-element-modifier',
                correct: false,
            },
            {
                id:'29',
                value: 'blockelement--modifier',
                correct: true,
            },
            {
                id:'30',
                value: 'block--elementmodifier',
                correct: false,
            },
        ]
    },

    {
        question: 'Может ли элемент существовать вне своего блока в БЭМ?',
        answers: [
            {
                id:'31',
                value: 'Нет, элемент всегда должен принадлежать блоку',
                correct: true,
            },
            {
                id:'32',
                value: 'Да, элемент может быть независимым',
                correct: false,
            },
            {
                id:'33',
                value: 'Да, но только в определённых условиях',
                correct: false,
            },
        ]
    },

    {
        question: 'Какой подход используется при разработке с помощью БЭМ?',
        answers: [
            {
                id:'34',
                value: 'Изоляция компонентов',
                correct: true,
            },
            {
                id:'35',
                value: 'Плоская структура',
                correct: false,
            },
            {
                id:'36',
                value: 'Использование классов только для стилей без JS',
                correct: false,
            },
        ]
    },

    {
        question: 'Какой из следующих принципов не является частью БЭМ?',
        answers: [
            {
                id:'37',
                value: 'Модулярность',
                correct: false,
            },
            {
                id:'38',
                value: 'Инкапсуляция',
                correct: true,
            },
            {
                id:'39',
                value: 'Повторное использование',
                correct: false,
            },
        ]
    },

    {
        question: 'Что такое "домен" в контексте БЭМ?',
        answers: [
            {
                id:'40',
                value: 'Сопоставление блоков и их элементов в разных проектах',
                correct: false,
            },
            {
                id:'41',
                value: 'Категория, к которой принадлежат блоки',
                correct: true,
            },
            {
                id:'42',
                value: 'Форма организации кода',
                correct: false,
            },
        ]
    },

    {
        question: 'Какой из следующих классов корректен по БЭМ?',
        answers: [
            {
                id:'43',
                value: 'buttonicon--small',
                correct: true,
            },
            {
                id:'44',
                value: 'button-iconsmall',
                correct: false,
            },
            {
                id:'45',
                value: 'button::icon-small',
                correct: false,
            },
        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
            `
        )
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
                <div class="quiz-questions-item__questions">${DATA[index].question}</div>
                <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
            </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassName = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid'
        } else if (answer.correct) {
            classname = 'answer--valid'
        }

        return classname
    };

        const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class="${getClassName(answer, questionIndex)}">${answer.value}</li>`)
        .join('');
    


    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__questions">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    // логика ответа
    if (event.target.classList.contains('answer-input')) {
        console.log('Input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

        console.log(localResults)
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1
        
        if (DATA.length === nextQuestionIndex) {
            // переход к результатам
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        }else {
            // переход к след. вопросу
            renderQuestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);