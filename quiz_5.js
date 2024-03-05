const nama = 'Azril Miqraji';

// Object pertanyaan
const questions = [
    {
        nomor: "1",
        pertanyaan: "Berapa hasil dari 1 + 1?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
    },
    {
        nomor: "2",
        pertanyaan: "Berapa hasil dari 2 + 2?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
    },
    {
        nomor: "3",
        pertanyaan: "Berapa hasil dari 2 + 4?",
        opsi: ["a. 2", " b. 4", "c. 6", " d. 8"],
    },
    {
        nomor: "4",
        pertanyaan: "Berapa hasil dari 2 + 5?",
        opsi: ["a. 2", "b. 5", "c. 7", "d. 9"],
    },
    {
        nomor: "5",
        pertanyaan: "Berapa hasil dari 4 + 5?",
        opsi: ["a. 2", "b. 5", "c. 7", "d. 9"],
    },
    {
        nomor: "6",
        pertanyaan: "Berapa hasil dari 1 - 1?",
        opsi: ["a. 0", "b. 3", "c. 4", "d. 5"],
    },
    {
        nomor: "7",
        pertanyaan: "Berapa hasil dari 10 / 10?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 1"],
    },
    {
        nomor: "8",
        pertanyaan: "Berapa hasil dari 5 x 2?",
        opsi: ["a. 2", "b. 10", "c. 4", "d. 5"],
    },
    {
        nomor: "9",
        pertanyaan: "Berapa hasil dari 7 x 1?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 7"],
    },
    {
        nomor: "10",
        pertanyaan: "Berapa hasil dari (2x1) + (2+2)?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
    },
];

// Object jawaban user
const answerInputUser = [
    { answerUser: "a. 2" },
    { answerUser: "c. 4" },
    { answerUser: "c. 6" },
    { answerUser: "d. 9" },
    { answerUser: "c. 7" },
    { answerUser: "a. 0" },
    { answerUser: "d. 1" },
    { answerUser: "b. 10" },
    { answerUser: "d. 7" },
    { answerUser: "d. 5" },
];

// Object jawaban benar
const correctAnswer = [
    { nomor: "1", answer: "a. 2" },
    { nomor: "2", answer: "c. 4" },
    { nomor: "3", answer: "c. 6" },
    { nomor: "4", answer: "c. 7" },
    { nomor: "5", answer: "d. 9" },
    { nomor: "6", answer: "a. 0" },
    { nomor: "7", answer: "d. 1" },
    { nomor: "8", answer: "b. 10" },
    { nomor: "9", answer: "d. 7" },
    { nomor: "10", answer: "d. 5" },
];

// Fungsi untuk memeriksa jawaban
const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

// Fungsi untuk memproses setiap pertanyaan
const processQuestion = (question, index) => {
    console.log(`Pertanyaan ${question.nomor}: ${question.pertanyaan}`);
    console.log(`Jawaban Anda: ${answerInputUser[index].answerUser}`);
    console.log(`Jawaban yang benar: ${correctAnswer[index].answer}`);

    const isCorrect = checkAnswer(answerInputUser[index].answerUser, correctAnswer[index].answer);
    if (isCorrect) {
        console.log('Jawaban benar! Poin benar ditambah satu.\n');
        return { point: 1, correct: 1, wrong: 0 };
    } else {
        console.log('Jawaban Salah! Poin salah ditambah satu.\n');
        return { point: 0, correct: 0, wrong: 1 };
    }
};

// Memproses setiap pertanyaan
const results = questions.map(processQuestion);

// Menghitung total poin, jawaban benar, dan jawaban salah
const totalPoints = results.reduce((acc, curr) => {
    acc.point += curr.point;
    acc.correct += curr.correct;
    acc.wrong += curr.wrong;
    return acc;
}, { point: 0, correct: 0, wrong: 0 });

console.log(`Terimakasih ${nama} telah menyelesaikan test ini...`);
console.log(`Anda menjawab ${totalPoints.correct} pertanyaan dengan benar`);
console.log(`dan ${totalPoints.wrong} pertanyaan salah`);
