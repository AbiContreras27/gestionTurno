USER STORIES:

Lugar de Proyecto: Consultorio de Psicología

>>> Identificador: AUT-01 <<<
    * Autenticación de Usuario:

    - Descripción:

        + Como usuario quiero poder registrarme en la aplicación para tener acceso.

    - Criterios de aceptación:

        1. El usuario debe poder registrarse en un formulario.
        2. El usuario debe registrar en el formulario nombres, DNI, fecha de nacimiento, correo electrónico, nombre de usuario y contraseña
        3. El usuario debe de tener todos los campos diligenciados con información.
        4. El usuario debe de dar click en bóton de registrar o cancelar registro.

>>> Identificador: RC-01 <<<
    * Reservar cita:

    - Descripción:

        + Como usuario autenticado quiero agendar cita para conversar con profesional de salud mental dentro de un horario de atencion de 8am a 6pm.

    - Criterios de aceptación:

        1. El usuario solo puede seleccionar una fecha que este en el rango de lunes a viernes de 8am a 6pm, omitiendo fines de semana.
        2. Si intenta reservar un turno fuera de esos días u horas, se mostrará un mensaje indicando no se permite agenda fuera de horario de 8am a 6pm ni fines de semana.

>>> Identificador: VRC-01 <<<
    * Visualizar reservación de citas:

    - Descripción:

        + Como usuario autenticado quiero poder visualizar las citas reservadas en un listado para poder gestionarlas.

    - Criterios de aceptación:

        1. El usuario debe poder ver una lista de las reservaciones realizadas
        2. La lista de las reservaciones deben mostrar fecha y hora de reservación, estatus de la reservación, si es abierta o atendida y la opciónn de cancelar si esta abierta.


>>> Identificador: CR-01 <<<
    * Cancelación de citas:

    - Descripción:

        + Como usuario autenticado quiero poder cancelar citas reservadas un dia antes de la fecha de atención, para no asistir.

    - Criterios de aceptación:

        1. El usuario debe de poder cancelar reservación de cita hasta un dia antes a esta.
        2. No puede cancelar turno el mismo dia de la cita.
        3. Al cancelar, la cita desaparece de turnos futuros.


>>> Identificador: RFD-01 <<<
    * Restricción para agendar fines de semana:

    - Descripción:

        + Como usuario quiero que los días de fin de semana no estén disponibles para agendar turno y solo poder agendar en dias hábiles.

    - Criterios de aceptación:

        1. Los sabados y domingos no deben aparecer en la opcion del calendario para reservaciones.


>>> Identificador: CR-01 <<<
    * Envio de correo electrónico de confirmación al crear cuenta o registrarse:

    - Descripción:

        + Como usuario nuevo quiero poder recibir un correo electrónico de confirmación de cuenta creada exitosamente, para tener certeza que el registro se realizo.

    - Criterios de aceptación:

        1. El sistema debe de enviar un correo de confirmación inmediata despues del registro completado del usuario.
        2. El correo debe de incluir un mensaje de bienvenida y confirmar que la cuenta ha sido creada.
        3. El correo debe ser enviado al email del usuario.

>>> Identificador: CR-01 <<<
    * Envio de correo electrónico de confirmación al crear cuenta o registrarse:

    - Descripción:

        + Como usuario nuevo quiero poder recibir un correo electrónico de confirmación de cuenta creada exitosamente, para tener certeza que el registro se realizo.

    - Criterios de aceptación:

        1. El sistema debe de enviar un correo de confirmación inmediata despues del registro completado del usuario.
        2. El correo debe de incluir un mensaje de bienvenida y confirmar que la cuenta ha sido creada.
        3. El correo debe ser enviado al email del usuario.

>>> Identificador: CR-02 <<<
    * Envio de correo electrónico de confirmación de reservar cita:

    - Descripción:

        + Como usuario autenticado quiero poder recibir un correo electrónico de confirmación despues de reservar cita o cancelar cita, para tener historial de las peticiones hechas.

    - Criterios de aceptación:

        1. El sistema debe de enviar un correo de confirmación con Descripción de la cita (fecha y hora) despues de que el usuario cree una nueva reservación.
        2. El sistema debe de enviar un correo de confirmación con Descripción de la cita (fecha y hora) despues de que el usuario cancele cita.
        3. El correo debe ser enviado al email del usuario.

>>> Identificador: CR-02 <<<
    * subir foto de perfíl:

    - Descripción:

        + Como usuario autenticado quiero poder subir una foto de perfil en formato .jpg, .png para personalizar cuenta.

    - Criterios de aceptación:

        1. El usuario debe poder subir una imagen desde su dispositivo.
        2. La imagen debe de ser valida solo en formato  .jpg ó .png
        3. El sistema debe almacenar la foto y mostrarla en el perfíl de usuario.
        El sistema debe permitir actualizar o eliminar la foto.


ESQUEMA DB: MODELO ENTIDAD - RELACIÓN:

https://drive.google.com/file/d/1M0iOhu-nNaEDUV2wGNEDues6_PELREnc/view?usp=sharing

