

class Student {
    constructor(student) {
        this.id = student.id
        this.firstName = student.first_name
        this.lastName =  student.last_name
        this.classroomId = student.classroom_id
        this.appendStudentToDom()
        this.app = new FetchRequests()
    }

    appendStudentToDom() {
        let div = document.createElement("div")
        div.setAttribute("class", "student-box")
        div.setAttribute("data-id", this.id)
        div.addEventListener("click", this.removeStudent.bind(this))
        div.innerHTML = `<p>${this.firstName} ${this.lastName}</p>`
        let classroom = document.querySelector("div.classroom-container")
        classroom.appendChild(div)
    }
    removeStudent(e) {
        this.app.fetchRemoveStudent(e.target.dataset["id"])
        .then(data => {
            
           let foundStudent = document.querySelector(`div[data-id="${data.id}"]`)
            foundStudent.remove()
        })
    }

   
}