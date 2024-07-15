import express from 'express';


const app = express(); // Create an express app
const PORT = 2002; // Port number

app.listen(PORT, (res, req) => {
    console.log(`Server is running on http://localhost:${PORT}`);   
}); // Start the server 


const personOBJ = {
    name: 'tobi.',
    age: 99,
    location: 'Lagos, Nigeria', 
};


const validateUser = (req, res, next) => {
    const myPasscode = "1234";
    const {password} = req.headers
    if(password === myPasscode) {
        next()
    }else{
        res.status(401).json({message: "Unauthorized"})
    }}



app.get('/person', validateUser, (req, res) => {
    res.status(200).json(personOBJ);
}) 
