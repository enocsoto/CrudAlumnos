const { Router } = require('express');
const { addAlumnos,
    alumno,
    updateAlumnos,
    deleteAlumnos, 
    getAlumnos} = require('../controllers/user.controllers');

const router = Router();

router.get('/alumnos', alumno);
router.get('/getAlumno/:id', getAlumnos);
router.post('/addAlumno', addAlumnos);
router.patch('/updateAlumno/:id', updateAlumnos);
router.delete('/deleteAlumno/:id', deleteAlumnos);

module.exports = router;