import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const users = []
router.get('/', (req, res) => {
    console.log(users);
    let data1 = [...users];
    const data = JSON.stringify(data1);
    let newdata;
    let writedata;
    try {
        newdata = fs.writeFileSync('./routes/users.txt', data);
        writedata = fs.readFileSync('./routes/users.txt', 'utf8');
        writedata = JSON.parse(writedata);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    res.send(writedata);
})

const handler = (req, res) => {

    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
}

const userMiddleware = (req, res, next) => {

	const schema = Joi.object().keys({
		firstName: Joi.string().required(),
		lastName: Joi.string().required()
	});

	const { value, error } = Joi.compile(schema)
		.prefs({ errors: { label: 'key' }, abortEarly: false })
		.validate(req.body);

	const valid = error == null;

	console.log("valid? ===> ", valid);

	if (!valid) {
		console.log("Validation failed");
		let resObject = {
			status: 400,
			msg: "Validation failed"
		}
		res.send(resObject)
	} else {
		next()
	}
}

router.post('/',userMiddleware, handler);

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const founduser = users.find((user) => user.id == id);
    res.send(founduser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} deleted from the database.`);
});

export default router;