const {Client} = require('pg')


const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "5067",
    database: "TvShowsProject"
})

client.connect();

class dataBasePSQL{
    tst;

    testQuery(){
        client.query('Select "BattleNo" from battles WHERE "BattleYear"=300',(err, res)=>{
            if(!err){
                console.log(res.rows);
                this.tst = res.rows;
            }
            else{
                console.log(err.message);
            }
            client.end;
        })

    }
}

const square = new dataBasePSQL();
square.testQuery();
console.log(square.tst);



