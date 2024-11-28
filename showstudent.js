const fs = require('fs');
const csv = require('csv-parser');
const {MongoClient}=require('mongodb');

const url="mongodb://localhost:27017";
const dbName="411630667";
const collectionName="studentslist";
(async()=>{
    const client=new MongoClient(url);

try {
    // 連接到 MongoDB
    await client.connect();
    console.log("成功連接到 MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const studentslist = await collection.find().toArray();

    console.log("學生資料列表:");
    studentslist.forEach(student => {
        console.log(student);
    });
} catch (error) {
    console.error("發生錯誤：", error);
}finally{
    await client.close();
}
})();