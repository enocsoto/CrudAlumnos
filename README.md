# CRUD ALUMNOS POR ID - CRUD STUDENTS WHIT ID

Aplicacion para leer, crear, actualizar, y eliminar, alumnos con id unico

APP to create, read, update and delete students whit id unice.

## Instalación - Instalation

se omite la carga de los módulos de node.

loading of node modules is skipped.


```bash
npm install
```

## Paquetes Usados - Used Packages 

```uuid
express
dot.env
cors
```

## Descripción - Description
la aplicación permite por medio de peticiones y parametros realizar lo siguiente:

Agregar alumnos por la peticion POST en el endpoint /addAlumno. "genera un id unico por cada alumno".

ver alumnos agregados por la peticion GET en el endpoint /alumnos.

consultar alumno por ID en la peticion GET en el endpoint /getAlumno/ id <== colocando el id unico generado.

Actualizar alumno por la peticion PATCH en el endpoint /updateAlumno/ id <== using el id unico generado.

eliminar alumno por la peticion DELETE en el endpoint /deleteAlumno/ id <== usando el id unico generado.


************
The application allows by means of requests and parameters to do the following:

Add students by POST request in the /addAlumno endpoint. "generate a unique id for each student".

view students added by the  GET request  on the endpoint /alumnos.

query student by ID in the GET request on the endpoint /getAlumno/ id <== using the unique id generated.

Update student by PATCH request on the endpoint /updateAlumno/  id <== using the unique id generated.

delete student by DELETE request on endpoint /deleteAlumno/ id <== using the unique id generated.


************
## Gracias por revisar mi repositorio, espero y sea de tu agrado.

## Thank you for reviewing my repository, I hope and you like it.