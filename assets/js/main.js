//Arreglos

//Radiologia
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
]

//Traumatologia
let traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
]

//Dental
let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
]

//-------------------------------------------------------------------------------------------------------------

//1. Agregar pacientes al arreglo de traumatologia
radiologia.push({ hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
);
//Metodo para ordenar por hora
radiologia.sort(function (a, b) {
    if (a.hora > b.hora) {
        return 1;
    }
    if (a.hora < b.hora) {
        return -1;
    }
    return 0
});

//2. Eliminar el primer y último elemento del arreglo de Radiología
//Primer elemento
radiologia.shift();

//Ultimo elemento
radiologia.pop();

//3.Imprimir la lista de consultas médicas de Dental. Separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.
//Se realiza iteracion para obtener todos los pacientes
dental.forEach(function (x) {
    var filaDental = ('<p>' + x.hora + " - " + x.especialista + " - " + x.paciente + " - " + x.rut + " - " + x.prevision + '</p>');
    document.getElementById("consultasDental").innerHTML += filaDental;
});

//4.Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
//Se itera por cada especialidad obteniendo solo el nombre
dental.forEach(function (i) {
    var pacientesDental = ('<p>' + i.paciente + '</p>')
    document.getElementById("pacientesDental").innerHTML += pacientesDental;
});

traumatologia.forEach(function (i) {
    var pacientesTrauma = ('<p>' + i.paciente + '</p>')
    document.getElementById("pacientesTrauma").innerHTML += pacientesTrauma;
});

radiologia.forEach(function (i) {
    var pacientesRadio = ('<p>' + i.paciente + '</p>')
    document.getElementById("pacientesRadio").innerHTML += pacientesRadio;
});

//5.Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.
//Se realiza primero filtro de los pacientes con prevision ISAPRE, luego se itera variable para mostrar solo el nombre y prevision

var pacienteIsapreDn = dental.filter(function (dental) {
    return dental.prevision == 'ISAPRE';
});

pacienteIsapreDn.forEach(function (i) {
    var pacienteIsapre = ('<p>' + i.paciente + " - " + i.prevision + '</p>')
    document.getElementById("pacienteIsapre").innerHTML += pacienteIsapre;

});

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.
//Se realiza primero filtro de los pacientes con prevision FONASA, luego se itera variable para mostrar solo el nombre y prevision
var pacienteFonasaTr = traumatologia.filter(function (traumatologia) {
    return traumatologia.prevision == 'FONASA';
});

pacienteFonasaTr.forEach(function (i) {
    var pacienteFonasa = ('<p>' + i.paciente + " - " + i.prevision + '</p>')
    document.getElementById("pacienteFONASA").innerHTML += pacienteFonasa;
});

