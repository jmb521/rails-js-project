class ClassroomApp {
    constructor() {
        this.allClassrooms = []
        this.app = new FetchRequests()
        this.getAllClassrooms()
        this.elementsAndEventListeners()
        
    }
    
    elementsAndEventListeners() {
        this.classForm = document.querySelector(".new-classroom-form")
        this.dropDown = document.querySelector(".classroom-select")
        this.classForm.addEventListener("submit", function(event) {
            
            this.createClassroom(event)
        })
        this.newStudentForm = document.querySelector(".new-student-form")
        this.newStudentForm.addEventListener("submit", this.getContentsOfStudentForm.bind(this))
        this.dropDown.addEventListener("change", this.getDropDownChange.bind(this))
        this.classroom = document.querySelector("div.classroom-container")
        
    }
    getAllClassrooms() {
        
        this.app.getClassrooms()
        .then(data => {
             data.forEach(c => {
            
                let newClassroom = new Classroom(c)
                this.allClassrooms.push(newClassroom)
            })
        })
        .then(() => {
            this.updateDropDown()
        })
        
    }

    updateDropDown() {
        
        let classroomArray = this.allClassrooms.map(room => {
             return `<option value="${room.id}">${room.name}</option>`
        })
        
        this.dropDown.innerHTML = this.dropDown.innerHTML + classroomArray.join('')
    }

    createClassroom(event) {
        event.preventDefault()
        console.log("this", this)
        this.app.fetchCreateClassrooms()
            .then(data => {
                let newClassroom = new Classroom(data)
                this.allClassrooms.push(newClassroom)
                event.target[0].value = ""
            })
    }
    
    getDropDownChange(e) {
        this.classroom.innerHTML = "";
        let input = document.querySelector('#classroom-id')
        input.value = e.target.value
        this.newStudentForm.appendChild(input)
        let filteredClassroom = this.allClassrooms.find(room => room.id === parseInt(e.target.value, 10))
        filteredClassroom.students.forEach(student => {
            new Student(student)
        })
        this.newStudentForm.style.visibility = "visible"
    }

    getContentsOfStudentForm(e) {
        e.preventDefault()
        this.app.fetchCreateStudent(e)
        .then(data => {
            new Student(data)
        })
        e.target[0].value =""
        e.target[1].value =""
    }
    

}
