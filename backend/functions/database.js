const mongoose = require('mongoose');
const URI = "mongodb+srv://gabrielMase:testMongoDB@todos.5urmg.mongodb.net/todosapp?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
const connectToDB = mongoose.connection;
connectToDB.once('open', () => console.log("Connected to DB"))