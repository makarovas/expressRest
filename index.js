import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';


const app = express();
const jsonParser = express.json();
const uri = "mongodb+srv://user_001:001@cluster0.n2iab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(jsonParser);
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    app.listen(3000, () => console.log('SERVER STARTED' + 3000));
  } catch(e) {
    console.log(e);
  }
}

startApp();