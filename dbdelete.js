const pool = require("./db");

const sql = 'DELETE FROM public."Category" WHERE cat_id = $1 RETURNING *';
const data = [4];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();
