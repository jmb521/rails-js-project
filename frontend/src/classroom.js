document.addEventListener("DOMContentLoaded", function() {
    Classroom.createClassroom()
    Classroom.getAllClassrooms()
    Classroom.getDDChange()
    
})
const all = []
let dd = document.querySelector(".classroom-select")
let classroom = document.querySelector(".classroom")
class Classroom {

    
    constructor(classroom) {
        this.id = classroom.id; 
        this.name = classroom.name;
        this.students = classroom.students
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
                // dd.innerHTML = dd.innerHTML + `<option value="${c.id}">${c.name}</option>`
                all.push(newClassroom)
                 
                newClassroom.addClassroomToDom()
            })
        })
        .then(data => Classroom.updateDropDown())
    }

    addClassroomToDom() {
        
        let p = document.createElement("p")
        p.innerText = this.name
        classroom.appendChild(p)
    }

    static getDDChange() {
       
        dd.addEventListener("change", function(e){
            classroom.innerHTML = "";
            let filteredClassroom = all.find(room => room.id === parseInt(e.target.value, 10))
            
            filteredClassroom.students.forEach(student => {
                let newStudent = new Student(student)
                newStudent.appendStudentToDom()
            })
        })
    }
    
    static updateDropDown() {
        all.forEach(room => {
            dd.innerHTML = dd.innerHTML + `<option value="${room.id}">${room.name}</option>`
        })
        
    }
    

    

}





