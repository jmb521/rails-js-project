class FetchRequests {
    constructor() {
        this.url = "http://localhost:3000"
    }

    getClassrooms() {
       return fetch(`${this.url}/classrooms`)
        .then(response => response.json())
        //determine what you will do with the response
    }
    fetchCreateClassroom() {

         return fetch(`${this.url}/classrooms`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                name: event.target[0].value
            })
        })
        .then(response => response.json())
    }

    fetchCreateStudent(event) {
        console.log("classroom_id", event.target[3].value)
        console.log("create student event", event)
        return fetch(`${this.url}/students`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                student: {

                    first_name: event.target[0].value,
                    last_name: event.target[1].value, 
                    classroom_id: event.target[3].value
                }
            })
            
        })
        .then(response => response.json())
    }

    fetchRemoveStudent(student) {
        return fetch(`${this.url}/students/${student}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        
    }
}