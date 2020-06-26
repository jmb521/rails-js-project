document.addEventListener("DOMContentLoaded", function() {
    Classroom.createClassroom()
    Classroom.getAllClassrooms()
    Classroom.getDDChange()
    
})
// const all = []
let dd = document.querySelector(".classroom-select")
let classroom = document.querySelector(".classroom")
class Classroom {

    
    constructor(classroom) {
        this.id = classroom.id; 
        this.name = classroom.name;
        this.students = classroom.students
        // all.push(this)
    }

   
            // set allClassrooms([]) {
            //     this.allClassrooms = []
            // }
            // get allClassrooms() {
            //     return this.allClassrooms
            // }
    // static allClassrooms() {
    //     let all = Classroom.all
    //     return all
    // }
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
            event.target[0].value = ""
     })

    }

   
    static getAllClassrooms() {
        //get all classrooms from api
        //add classrooms to dom
        
        fetch("http://localhost:3000/classrooms")
        .then(response => response.json())
        .then(data => {
            data.map(c => {

                let newClassroom = new Classroom(c)
                dd.innerHTML = dd.innerHTML + `<option value="${c.id}">${c.name}</option>`
                
                newClassroom.addClassroomToDom()
            })
        })
    }

    addClassroomToDom() {
        
        let p = document.createElement("p")
        p.innerText = this.name
        classroom.appendChild(p)
    }

    static getDDChange() {
        
        dd.addEventListener("change", function(e){
            classroom.innerHTML = "";
            //e.target.value 
            fetch(`http://localhost:3000/classrooms/${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                data.students.map(element => {
                let newStudent = new Student(element)
                newStudent.appendStudentToDom()
            })
        })
         
    
        })
    }
    
    

    

}





