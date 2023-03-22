class UserSettings{
    constructor(user){
        this.user = user
    }

    changeSettings(){
        if(this.verifyCredentials("test")){
            console.log("Start processing")
        } else {
            console.log("Wrong creds")
        }
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