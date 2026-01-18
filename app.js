(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });



    document.getElementById('quizz-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'b',
        q4: 'b',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'a',
        q9: 'b',
        q10: 'b',
        q11: 'a',
        q12: 'a',
        q13: 'c',
        q14: 'a',
        q15: 'a'
    };

    const questions = {
        q1: 'What is the primary purpose of a firewall?',
        q2: 'Which of the following is a type of malware?',
        q3: 'What does "phishing" refer to?',
        q4: 'What is a DDoS attack?',
        q5: 'What is the purpose of encryption?',
        q6: 'What is two-factor authentication (2FA)?',
        q7: 'What is a VPN used for?',
        q8: 'What is a common vulnerability in web applications?',
        q9: 'What is social engineering?',
        q10: 'What is a zero-day vulnerability?',
        q11: 'What is the principle of least privilege?',
        q12: 'What is a honeypot in cybersecurity?',
        q13: 'What is the difference between symmetric and asymmetric encryption?',
        q14: 'What is a buffer overflow?',
        q15: 'What is the purpose of a security audit?'
    };

        const answersText = {
            q1: { a: 'To encrypt data', b: 'To monitor and filter network traffic', c: 'To perform regular backups' },
            q2: { a: 'A cookie', b: 'A firewall', c: 'A Trojan horse' },
            q3: { a: 'A type of fishing sport', b: 'A fraudulent attempt to obtain sensitive information', c: 'A method of cooling computer hardware' },
            q4: { a: 'An attack that targets a single computer', b: 'An attack that uses multiple compromised systems to flood a target', c: 'An attack that steals data' },
            q5: { a: 'To make data unreadable to unauthorized users', b: 'To speed up network connections', c: 'To block unwanted emails' },
            q6: { a: 'A method that requires two different passwords', b: 'A security process that requires two different authentication factors', c: 'A type of antivirus software' },
            q7: { a: 'To create a secure connection over a public network', b: 'To increase internet speed', c: 'To block ads' },
            q8: { a: 'SQL Injection', b: 'HTML Injection', c: 'CSS Injection' },
            q9: { a: 'The use of technology to manipulate social media', b: 'The psychological manipulation of people into performing actions or divulging confidential information', c: 'A type of software engineering' },
            q10: { a: 'A vulnerability that has been known for zero days', b: 'A vulnerability that is unknown to those who should be interested in mitigating it', c: 'A vulnerability that has no impact' },
            q11: { a: 'Giving users the minimum levels of access necessary to perform their job functions', b: 'Giving all users the same level of access', c: 'Giving users access to everything' },
            q12: { a: 'A system designed to attract and trap attackers', b: 'A type of malware', c: 'A secure data storage system' },
            q13: { a: 'Symmetric uses one key, asymmetric uses two', b: 'Symmetric is faster than asymmetric', c: 'Both a and b' },
            q14: { a: 'An anomaly where a program, while writing data to a buffer, overruns the buffer\'s boundary and overwrites adjacent memory locations', b: 'A type of network attack', c: 'A hardware failure' },
            q15: { a: 'To assess the security of an organization\'s information systems', b: 'To install new security software', c: 'To train employees on security best practices' }
        };

        let score = 0;
        const userAnswers = {};
        const form = new FormData(e.target);

        for (let [name, value] of form.entries()) {
            userAnswers[name] = value;
            if (value === correctAnswers[name]) {
                score++;
            }
        }

        const resultsContainer = document.getElementById('quizz-results');
        let resultsHTML = `<h3>Your score: ${score} / ${Object.keys(correctAnswers).length}</h3>`;

        for (const questionKey in correctAnswers) {
            const userAnswer = userAnswers[questionKey];
            const correctAnswer = correctAnswers[questionKey];
            const questionText = questions[questionKey];
            const isCorrect = userAnswer === correctAnswer;

            resultsHTML += `
                <div>
                    <p><strong>${questionText}</strong></p>
                    <p>Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${userAnswer ? answersText[questionKey][userAnswer] : 'No answer'}</span></p>
                    ${!isCorrect ? `<p>Correct answer: <span class="correct-answer">${answersText[questionKey][correctAnswer]}</span></p>` : ''}
                </div>
                <hr>
            `;
        }

        resultsContainer.innerHTML = resultsHTML;
    });

    // Studies section
    const yearTitles = document.querySelectorAll('.year-title');
    const semesterTitles = document.querySelectorAll('.semester-title');

    yearTitles.forEach(yearTitle => {
        yearTitle.addEventListener('click', () => {
            const semesters = yearTitle.nextElementSibling;
            if (semesters.style.display === 'block') {
                semesters.style.display = 'none';
            } else {
                semesters.style.display = 'block';
            }
        });
    });

    semesterTitles.forEach(semesterTitle => {
        semesterTitle.addEventListener('click', () => {
            const subjects = semesterTitle.nextElementSibling;
            if (subjects.style.display === 'block') {
                subjects.style.display = 'none';
            } else {
                subjects.style.display = 'block';
            }
        });
    });
})();