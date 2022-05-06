const mongodb=require("../utility/database")
const User=class User{
    constructor(id,name,password){
        this.id=id;
        this.name=name;
        this.password=password;
    }
    static controlUser(){
        const db=mongodb.getDb();
        return db.collection("users").find().toArray()
    }
    static addAllRoutes(test){
        const db=mongodb.getDb();
        return db.collection("routes").insert(test)
    }
}
module.exports=User