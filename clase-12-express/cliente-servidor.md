| FRONTEND                                                                 | BACKEND                                                       |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| Se ejecuta en la computadora del usuario                                 | Se ejecuta del lado de un servidor a parte. SIEMPRE ACTIVO    |
| Su código quedaba expuesto                                               | Su código no queda expusto                                    |
| Su código puede ser modificalbe (herramientas de desarrollo)             | Su código no puede ser modificable por un cliente             |
| Cualquier validación no es confiable                                     | Puedo confiar en sus validaciones                             |
| No va a tener acceso directo a la base de datos                          | Tiene acceso a la base de datos, no queda expuesta            |
| ``<input type="number" max=100 name="puntos">``                          | ``const puntos = loQueMeLlega <= 100 ? loQueMeLLega : ERROR`` |
