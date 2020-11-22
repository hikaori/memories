import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import nodemon from 'nodemon';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb', express: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', express: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://admin:admin1234@cluster0.rn2bt.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`),
    ),
  )
  .catch(error => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
