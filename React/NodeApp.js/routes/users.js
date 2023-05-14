import express from 'express';
import {v4 as uuidv4 } from 'uuid';
const router = express.Router();
const users = []

router.get('/', (req, res)=>{
    console.log(users);
    res.send(users);
})

router.post('/', (req, es)=>{
    const user = req.body;
    users.push({...user, id:uuidv4()});
    res.send(`User with the name ${user.firstname} added to the database!`);
});

router.get('/:id', (req,res)=>{
    const {id} = req.params;
    const founduser = users.find((user) =>user.id==id);
    res.send(foundUser);
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) =>user.id!=id);
    res.send(`User with id ${id} deleted from the database.`);
});

export default router;