import SQLite from "react-native-sqlite-storage";
const db=SQLite.openDatabase({
    name:"Aadhar",
    location:"default",
},
()=>{},
error=>{console.log(error);}
)
const createTable=()=>{
    db.transaction((tx)=>{
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS"
            +"Users "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT,Aadhar INTEGER ,Name TEXT,Fathers_name TEXT,DOB INTEGER,Address TEXT"
        )
    })
}