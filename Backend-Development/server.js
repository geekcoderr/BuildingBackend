import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
const studentData=[
    {
      "name": "Alice",
      "id": 12345,
      "phone": "+1234567890"
    },
    {
      "name": "Bob",
      "id": 67890,
      "phone": "+9876543210"
    },
    {
      "name": "Charlie",
      "id": 13579,
      "phone": "+1122334455"
    },
    {
      "name": "David",
      "id": 24680,
      "phone": "+9988776655"
    },
    {
      "name": "Eva",
      "id": 98765,
      "phone": "+1122334455"
    },
    {
      "name": "Frank",
      "id": 54321,
      "phone": "+9988776655"
    },
    {
      "name": "Grace",
      "id": 11111,
      "phone": "+1122334455"
    },
    {
      "name": "Hank",
      "id": 22222,
      "phone": "+9988776655"
    },
    {
      "name": "Ivy",
      "id": 33333,
      "phone": "+1122334455"
    },
    {
      "name": "Jack",
      "id": 44444,
      "phone": "+9988776655"
    }
  ]
  

app.get('/api/sdata', (req, res) => {
    res.send(studentData);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
