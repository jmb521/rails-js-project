document.addEventListener("DOMContentLoaded", function() {
    Classroom.createClassroom()
})

class Classroom {
    constructor(classroom) {
        this.id = classroom.id; 
        this.name = classroom.name;
        this.students = [];
    }


    static createClassroom() {
        let classForm = document.querySelector(".new-classroom-form")
        classForm.addEventListener("submit", function(event) {
            event.preventDefault()

            fetch("http://localhost:3000/classrooms", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    name: event.target[0].value
                })
            })
            .then(response => response.json())
            .then(data => {
                let newClassroom = new Classroom(data)
                newClassroom.addClassroomToDom()
            })
     })

    }

    addClassroomToDom() {
        let classroom = document.querySelector(".classroom")
        let p = document.createElement("p")
        p.innerText = this.name
        classroom.appendChild(p)
    }

}





