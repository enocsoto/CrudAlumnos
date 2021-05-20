const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
let userdb = [];
const alumno = (req, res = response) => {
    res.json({
        msg: 'ok',
        userdb
    });
}
const getAlumnos = (req, res = response) => {
    const { id } = req.params;
    const foundUser = userdb.find((user) => user.id === id);
    res.send(foundUser);
}
const addAlumnos = (req, res = response) => {
    const body = req.body;
    userdb.push({ ...body, id: uuidv4() });
    res.send(`user added to database`);
}
const updateAlumnos = (req, res = response) => {
    const { id } = req.params;
    const { name, age, nombre, edad } = req.body;
    const user = userdb.find((user) => user.id === id);
    if (name) user.name = name;
    if (age) user.age = age;
    if (nombre) user.nombre = nombre;
    if (edad) user.edad = edad;

    res.send(`User whit the id ${id} updated`);
}
const deleteAlumnos = (req, res = response) => {
    const { id } = req.params;
    userdb = userdb.filter((user) => user.id !== id);
    res.send(`user whit id ${id} deleted from database`);
}
module.exports = {
    alumno,
    getAlumnos,
    updateAlumnos,
    deleteAlumnos,
    addAlumnos
}