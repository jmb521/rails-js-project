class Classroom {
    constructor(classroom) {
        this.id = classroom.id; 
        this.name = classroom.name;
        this.students = classroom.students
        this.addClassroomToDom()
    }

   
   
    addClassroomToDom() {
        let classroom= document.querySelector(".classroom-container")
        let p = document.createElement("p")
        p.innerText = this.name
        
        classroom.appendChild(p)
    }

   

    
    
    

    

}





