/* ==========================================================
   OPERACIÓN CALAMAR · miScript.js
   Aquí va TODO tu JavaScript. No hace falta tocar index.html
   (salvo para enlazar este archivo) ni estilos.css.

   MAPA DE IDS Y CLASES (ya están en el HTML)
   ------------------------------------------
   Saludo y cuenta atrás : #saludo  #fechaEvento  #cuentaAtras (atributo data-fecha)
                           #dias  #horas  #minutos  #segundos  #mensajeCuenta
   Calculadora           : #tipoEntrada  #entregadas  .descuento (checkboxes con data-descuento)
                           #resultadoEntrada
   Formulario            : #nombre  #alias  #email  #bando  #acepto
                           #errorNombre  #errorAlias  #errorEmail  #errorBando  #errorAcepto
   Ventana de aviso      : #modalConfirmacion  #mensajeModal
   Extras                : #btnModo  #btnArriba  #avisoConexion  #infoNavegador

   CLASES CSS QUE PUEDES ACTIVAR
   -----------------------------
   .oculto    → oculta el elemento
   .ok / .mal → resultado de la calculadora
   .invalido  → campo de formulario con error
   .noche     → en <body>, activa el modo noche

   NOTA SOBRE onclick
   Los botones del HTML llaman a las funciones con onclick="...".
   Por eso las funciones de abajo tienen que llamarse EXACTAMENTE así
   y estar declaradas en el nivel principal del archivo.

   NOTA SOBRE <dialog>
   Es una ventana modal de HTML5. Solo necesitas dos métodos:
       elemento.showModal();   // la abre, bloqueando el resto de la página
       elemento.close();       // la cierra (el botón "Entendido" ya lo hace)
   Su contenido se cambia como el de cualquier elemento (textContent).
   ========================================================== */


/* ---------- Enlace al script y mensaje en consola ----------
   1. Enlaza este archivo en index.html (mira el comentario del <head>).
   2. Comprueba que carga: escribe un console.log() aquí abajo y ábrelo
      en las Herramientas del desarrollador → Consola.
   3. Prueba también console.warn() y console.error() y observa la diferencia.
*/



/* ---------- Saludo, fecha y cuenta atrás ----------
   a) Saludo: cambia el texto de #saludo según la hora actual (new Date().getHours()).
      Al menos 4 tramos (madrugada, mañana, tarde, noche). Puedes hacerlo humorístico (o no)
   b) Fecha: lee la fecha del atributo data-fecha de #cuentaAtras (.dataset.fecha),
      conviértela en un objeto Date y escríbela en #fechaEvento con el formato
      "18/12/2026 · 10:00" (pista: toLocaleDateString, getHours, getMinutes, padStart).
   c) Cuenta atrás: calcula los días, horas, minutos y segundos que faltan y
      escríbelos en #dias, #horas, #minutos y #segundos (con dos cifras salvo los días).
      Que se actualice cada segundo (setInterval).
      Pista: 1 segundo = 1000 ms. Usa Math.floor y el operador %.
   d) Cuando llegue la hora: detén el intervalo (clearInterval), pon todo a 00
      y escribe un mensaje en #mensajeCuenta.
      Para probarlo, cambia temporalmente data-fecha a una fecha pasada.
*/



/* ---------- Calculadora de entradas ----------
   La entrada cuesta entregas de actividades. Cada descuento marcado reduce el
   porcentaje sobre el precio base. Los descuentos se acumulan.

   Al pulsar el botón:
   - Lee el precio base de #tipoEntrada y las entregas ya hechas de #entregadas.
     (¡.value siempre es texto! Conviértelo con Number()).
   - Valida: las entregas deben ser un número entero, no negativo.
     Si no, muestra un aviso en #resultadoEntrada.
   - Recorre los checkboxes .descuento con un bucle y suma el data-descuento
     de los marcados (.checked).
   - Total = precio base con el descuento aplicado, redondeado HACIA ARRIBA
     (no se aceptan medias entregas): Math.ceil.
   - Muestra en #resultadoEntrada cuántas entregas cuesta, cuánto descuento llevas
     y si ya tienes la entrada o cuántas te faltan.
   - Pon la clase .ok si ya tienes entrada, o .mal si faltan entregas
     (quita la anterior antes de poner la nueva: classList.remove / add).
*/
const calcularEntrada = () => {
  console.warn('calcularEntrada() está pendiente de programar');
};


/* ---------- Formulario de inscripción ----------
   Al pulsar "¡Apuntarme!":
   1. Limpia los errores anteriores (.error y .invalido).
   2. Valida cada campo. Si falla, escribe el mensaje en su <small class="error">
      y añade la clase .invalido al campo:
        - nombre : sin espacios sobrantes (trim), al menos 5 caracteres y con al menos un espacio
                   entre nombre y apellido.
        - alias  : entre 3 y 12 caracteres (después de trim).
        - email  : sin espacios, con una única @ que no esté al principio, y con un punto
                   después de la @ (que no sea el último carácter).
                   Pistas: includes, indexOf, lastIndexOf, endsWith.
        - bando  : que se haya elegido uno.
        - acepto : que esté marcado.
   3. Si TODO es válido, rellena #mensajeModal con un mensaje personalizado
      (alias en MAYÚSCULAS, email en minúsculas, bando elegido...) con una
      plantilla de cadena, y ábrelo con showModal().
*/
const inscribirse = () => {
  console.warn('inscribirse() está pendiente de programar');
};


/* ----------  Extras de navegación ----------
   a) cambiarModo(): alterna la clase .noche en document.body (classList.toggle)
      y cambia el texto del botón #btnModo ("🌙 Modo noche" / "☀️ Modo día").
   b) volverArriba(): lleva la página arriba con window.scrollTo (mejor si es suave).
   c) Al cargar: si navigator.onLine es false, quita la clase .oculto de #avisoConexion.
   d) Al cargar: escribe en #infoNavegador los datos de tu equipo de combate:
      idioma (navigator.language), núcleos (navigator.hardwareConcurrency),
      pantalla (screen.width × screen.height) y ventana (window.innerWidth × window.innerHeight).
   Icono	Código Unicode	En HTML	En JavaScript
   🌙 luna 	U+1F319, en HTML:&#x1F319; (o &#127769;). En Javascript: "\u{1F319}"
   ☀️ sol	Son dos caracteres: U+2600 + U+FE0F, en HTML: &#x2600;&#xFE0F. En Javascript: "\u{2600}\u{FE0F}"
*/
const cambiarModo = () => {
  console.warn('cambiarModo() está pendiente de programar');
};

const volverArriba = () => {
  console.warn('volverArriba() está pendiente de programar');
};
