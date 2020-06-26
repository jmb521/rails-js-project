

class Student {
    constructor(student) {
        this.firstName = student.first_name
        this.lastName =  student.last_name
        this.classroomId = student.classroom_id
    }

    appendStudentToDom() {
        let div = document.createElement("div")
        div.setAttribute("class", "student-box")
        div.innerHTML = `<p>${this.firstName} ${this.lastName}</p>`
        classroom.appendChild(div)
    }
}