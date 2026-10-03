function addStudent(){
    const Student = document.getElementById("noOfStudents");
    let StudentNo = Number(Student.value);

    try {
        if (StudentNo == '' || isNaN(StudentNo) || StudentNo <= 0){
            throw new Error("Invalid Input");
        }
    } catch (err) {
        document.getElementById("errormessage").innerText =
            `${err.name}: ${err.message}`;

        setTimeout(() => {
            document.getElementById("errormessage").innerText = '';
        }, 4000);

        return;
    }

    let Gradingsystem = document.getElementById("grader");

    // Clear previously generated students
    Gradingsystem.innerHTML = '';

    // Create the required number of students
    for (let i = 0; i < StudentNo; i++) {

        let student = document.createElement("div");
        student.className = "student-card";
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.className = "close-button";
        student.appendChild(closeButton);
        closeButton.addEventListener("click", (e) => {
            e.target.parentElement.remove()
        });
        let generate = document.createElement("button");
        generate.innerText = "Generate";
        student.appendChild(generate);
        generate.className = "generate";
        generate.addEventListener("click", function (e) {
            let inputs = scores.querySelectorAll("input");
            let studentScores = [];
            
            inputs.forEach(function(input) {
                studentScores.push(Number(input.value));
                
            });
            
            const total = studentScores.reduce(function(acc, curr){
                return acc + curr;
            });
            const avarage = total / studentScores.length;
            


            let cardContent = document.createElement("div");
            let cardname = `<h3>${studentname.value}</h3>`;
            let cardclass = `<p>Age: ${studentage.value} Class: ${studentclass.value}</p>`;
            let cardscore = `<p>Scores: ${studentScores.join(",")}</p>`;
            let cardtotal = `<p>Total: ${total} Avarage: ${avarage}</p>`;
            
            cardContent.innerHTML = cardname + cardclass + cardscore + cardtotal;

            let card = document.createElement("div");
            card.className = "card";
            let cardclose = document.createElement("input");
            cardclose.type = "button";
            cardclose.value = "X";
            cardclose.addEventListener("click", function(){
                card.remove();
            });
            
            card.appendChild(cardContent);
            card.appendChild(cardclose);

            
            document.getElementById("cardDisplay").appendChild(card);
            
            e.target.parentElement.remove();
        });
        
        

        let studentname = document.createElement("input");
        studentname.placeholder = "Enter Student Name";
        studentname.type = "text";
        studentname.className = "name-input";
        studentname.required ;

        let studentage = document.createElement("input");
        studentage.placeholder = "Enter Student Age";
        studentage.type = "number";
        studentage.className = "age-input";

        
        let scores = document.createElement("div");
        scores.className = "scores-container";
        scores.innerHTML = "<h4>Enter Scores:</h4>";
        for(let i = 0; i < 5; i++){
            let score = document.createElement("input");
            score.type = "number";
            score.placeholder = "000";
            score.max = 100;
            score.min = 1;
            score.className = "score-input";



            score.addEventListener("input", function(){
                if (Number(this.value) > 100) {
                    this.value = 100;
                }

                if (Number(this.value) < 1 && this.value !== "") {
                    this.value = 1;
                }
            });
            scores.appendChild(score);
        };
        

        let studentclass = document.createElement("select");
        studentclass.innerHTML =
            " <option>Select</option> <option value='SS1'>SS1</option><option value='SS2'>SS2</option> <option value='SS3'>SS3</option>"
            ;


            

        const studentID = [
            studentname, 
            studentage,
            studentclass,
            scores
        ];

        for (let input of studentID) {
            student.appendChild(input);
            const br = document.createElement("br");
            student.appendChild(br);
        }

        
        // Append this student to the grading system
        Gradingsystem.appendChild(student);
        setTimeout(() => {
            Student.value = '';
            document.getElementById("addStudent").disabled = true;
        }, 1000);

        
        
    }
    
    
}
