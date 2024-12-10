// Soruları ve seçenekleri içeren bir array oluştur
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "C++", "JavaScript", "Java"],
    },
];

// Kullanıcı cevaplarını tutmak için bir obje oluştur
const userAnswers = {};

// Kullanıcıdan her soru için cevap al
for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    console.log(`${i + 1}: ${q.question}`);

    for (let j = 0; j < q.options.length; j++) {
        console.log(`   ${j + 1}. ${q.options[j]}`);
    }

    let answer = parseInt(prompt(`Enter your answer (1-${q.options.length}):`));

    if (answer >= 1 && answer <= q.options.length) {
        userAnswers[`question${i + 1}`] = q.options[answer - 1];
    } else {
        i--; // Soruyu tekrar sormak için indexi azalt
        console.log("Invalid answer. Please try again.");
    }
}

// Sonuçları obje olarak yazdır
console.log("User Answers:", userAnswers);


