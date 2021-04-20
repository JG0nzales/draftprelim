const pool = require("./db");

const sql = 'INSERT INTO public."Category"(cat_description) VALUES ($1) RETURNING *';
const data = ['Bubbly'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();
