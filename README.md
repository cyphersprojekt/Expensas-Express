# Expensas-Express
Sistema de gestión de expensas de edificios y barrios privados en Express


## TODO:
- [x] Generar estructura de carpetas y main.js  
- [x] Definir modelos iniciales: Usuarios (clientes y administradores, quizÁS encargados), unidades, liquidaciones, sub-liquidaciones, pagos  
- [x] Crear una DB en Mongo Atlas accesible para todos
- [ ] Bocetos de las vistas y RBA  // in-progress: https://miro.com/app/board/uXjVMbktFp0=/#tpicker-content
- [ ] Decidir en un standard de logueo de errores y de respuestas de funciones
- [X] Diseñar la persistencia de información con DAOs, una factory y un helper (falta testear)
- [ ] Decidir si necesitamos real time rendering y como conseguirlo, sea con web sockets o js
- [ ] PENSAR integraciones de pago electronico (mercadopago, visa, stripe, lo q sea)  
- [ ] Sistema de notificaciones via mail, sms y/o whatsapp con nodemailer y twilio
