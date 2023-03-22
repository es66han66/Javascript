class UserSettings{
    constructor(user){
        this.user = user
        this.auth = new UserAuth(user)
    }

    changeSettings(){
        if(this.auth.verifyCredentials("test")){
            console.log("Start processing")
        } else {
            console.log("Wrong creds")
        }
    }
    
}

class UserAuth{
    constructor(user){
        this.user = user
    }

    verifyCredentials(value) {
        if(value === "test") {
            return true
        } else {
            return false
        }
    }
}

new UserSettings({
    name: "eshan"
}).changeSettings()