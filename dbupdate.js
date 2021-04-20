const pool = require("./db");

const sql = 'UPDATE public."Category" SET cat_description = $1 WHERE cat_id = 2 RETURNING *';
const data = ['Lazy'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();