const express = require("express");
const Redis = require('redis');

const PORT = 5000;

const redisClient = Redis.createClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

redisClient.on('error', (err) => console.log('Redis Client Error', err));

app.get("/values/:id", async (req, res) => {
    await redisClient.connect();
    const value = await redisClient.get(`${req.params.id}`);
    await redisClient.disconnect();
    console.log(value);
    if (value) {
       return  res.json(value);
    }
    return res.json("_NULL");
})
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

