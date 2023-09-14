import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users/currentUser',(req,res)=>{
  res.send('hey...how do you do?')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
