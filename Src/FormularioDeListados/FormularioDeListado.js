
const boton = document.getElementById("Comenzar");




const url = new URLSearchParams(window.location.search);
const valor = url.get('id');







const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const DiasUsados = []
const PredicadoresDispo = []
function Dias(A) {
    Opcion = A

    AnoActual = new Date()
    Actual = AnoActual.getFullYear();

    if (Opcion == 1) {

        let Inicio = new Date(Actual + "/01/01")
        let Final = new Date(Actual + "/03/31")
        DiasDisponibles(Inicio, Final)
    }
    if (Opcion == 2) {
        let Inicio = new Date(Actual + "/04/01")
        let Final = new Date(Actual + "/06/30")
        DiasDisponibles(Inicio, Final)
    }
    if (Opcion == 3) {
        let Inicio = new Date(Actual + "/07/01")
        let Final = new Date(Actual + "/09/30")
        DiasDisponibles(Inicio, Final)
    }
    if (Opcion == 4) {
        let Inicio = new Date(Actual + "/010/01")
        let Final = new Date(Actual + "/12/31")
        DiasDisponibles(Inicio, Final)
    }

    function DiasDisponibles(Inicio, Final) {
        cont = 0
        while (Inicio < Final) {
            //Modificacion Dias de Predicacion con el id que pase por el enlace

            if (Inicio.getDay() == valor) {
                cont++
                console.log(Inicio.getDate())
                DiasUsados.push(Inicio.getDate())

            }

            Inicio.setDate(Inicio.getDate() + 1);


        }
        EspaciosPredicacion(cont)
    }
}
function EspaciosPredicacion(cont) {
    Contenido = document.getElementById('FechasDisponibles');
    if (Contenido.innerHTML === '') {
      for (let i = 0; i < cont; i++) {
        const div = document.createElement('div');
        div.class = 'input-container';
        div.id = `contenedorSp`;

        // Crea el label para el input
        const label = document.createElement('label');
        label.textContent = `${DiasUsados[i]}:`;
        label.htmlFor = `input-${i}`;
        label.className = "FechaPredicacion"

        // Crea el input de tipo texto
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'Predicadores';
        input.id = `input-${i}`;
        input.placeholder = "Disponible";

        // Agrega los elementos al div
        div.appendChild(label);
        div.appendChild(input);

        // Agrega el div al contenedor principal en el DOM
        FechasDisponibles.appendChild(div);
    }  

    }
    else{
        
    }
}


function NombresPredicadores() {

    let Predicadores = document.querySelectorAll('.Predicadores');

    Predicadores.forEach((input, Index) => {
        PredicadoresDispo.push(input.value)

    });
    for (let I = 0; I < PredicadoresDispo.length; I++) {
        console.log(`Fecha ${DiasUsados[I]}: Para ${PredicadoresDispo[I]} `)
    }

    localStorage.setItem('Trimestre', JSON.stringify(Opcion));
    localStorage.setItem('DiasPredicacion', JSON.stringify(DiasUsados));
    localStorage.setItem('PredicadoresDisp', JSON.stringify(PredicadoresDispo));

    if (valor == 6) {
  
        window.location.href = "/Src/SabadoForm/SabadoForm.html";
    } else if (valor == 3) {
        window.location.href = "Src/MiercolesForm/MiercolesForm.html";
    } else if (valor == 5) {
        window.location.href = "Src/ViernesForm/ViernesForm.html";
    }

}
