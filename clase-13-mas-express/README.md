# Estructura

## Punto de entrada: main.js

app.get("/estudiantes",  traerEstudiantesCB);

const traerEstudiantesCB = (req, res) => {
  res.send([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Nico" },
  ]);
}

1. Punto de entrada: main.js
2. Definir rutas y métodos / verbos HTTP        -> Vista -> Exponen hacia afuera
3. Definir las acciones de cada ruta/verbo      -> Controller
4. Definir las entidades                        -> Modelo -> POO -> DB

## Tablas 

|     | Profesor              |
|-----|-----------------------|
|  pk | id                    |


|     | Cursada               |
|-----|-----------------------|
|  pk | id                    |
|  fk | idProfesor            |

|     | Estudiante            |
|-----|-----------------------|
|  pk | id                    |

|     | EstudiantesCursadas   |
|-----|-----------------------|
|  fk | idEstudiante          |
|  fk | idCursada             |
| int | nota                  |

# Carpeta estática

Se puede llamar:
- public
- static 
- assets
- resources

<img src="https://ruta-a-la-imagen.png">