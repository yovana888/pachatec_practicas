/*const persona1 = {
    id: 1,
    nombre: "Mario",
    edad: 22,
    apellido: "Torres",
    email: "mario@gmail.com",
    distrito: "San Isidro",
    carrera: "Informática"
}

const persona2 = {
    id: 2,
    nombre: "Kriss",
    edad: 20,
    apellido: "Galiano",
    email: "kriss@gmail.com",
    distrito: "Miraflores",
    carrera: "Informática"
}


const persona = [persona1, persona2]

/*
  Usando el siguiente arreglo indicar los datos personales (nombre, apellido y correo)
  en una oración del indice 1, contar cuantos son mayores de edad(18) y de cuantos su 
  nombre empieza con K
  Nota: Recomiendo usar para este último la funcion charAt.




persona.forEach(({ nombre, apellido, email, edad }, index) => {

    if (edad > 18) {
        console.log(` ${nombre} es mayor de 18`);
    }

    if (nombre.charAt(0) == 'K') {
        console.log(` ${nombre} inicia en "K"`);
    }

    if (index === 1) {
        console.log(`Su Nombre es ${nombre}, Apellido ${apellido} y Correo ${email}`);
    }

})*/



const alumnos = [{
        nombre: 'Juan',
        carrera: 'Biología',
        nota: 16
    },
    {
        nombre: 'Jose',
        carrera: 'Enfermero',
        nota: 10
    },
    {
        nombre: 'Luis',
        carrera: 'Policía',
        nota: 07
    },
    {
        nombre: 'Maria',
        carrera: 'Secretariado',
        nota: 10
    },
    {
        nombre: 'Hugo',
        carrera: 'Enfermero',
        nota: 15
    },
    {
        nombre: 'Rosa',
        carrera: 'Enfermero',
        nota: 12
    },
    {
        nombre: 'Luisa',
        carrera: 'Biología',
        nota: 18
    }
]

const getNotas = (arrayNotas) => {
    let totalAprobados = 0,
        totalDesaprobados = 0,
        sumatoriaAprobadas = 0,
        sumatoriaDesaprobados = 0;

    arrayNotas.forEach(({ nombre, carrera, nota }, index) => {
        if (nota >= 13) {
            totalAprobados++;
            sumatoriaAprobadas = sumatoriaAprobadas + nota;
        } else {
            totalDesaprobados++;
            sumatoriaDesaprobados = sumatoriaDesaprobados + nota;
        }

        if (index % 2 == 0) {
            console.log(`Mi Nombre es ${nombre} y mi Carrera es ${carrera}`);
        }

    });

    const promedio1 = sumatoriaAprobadas / totalAprobados;
    const promedio2 = sumatoriaDesaprobados / totalDesaprobados;

    console.log('Total Aprobados', totalAprobados);
    console.log('Total Desaprobados', totalDesaprobados);
    console.log('Promedio Aprobados', promedio1.toFixed(2));
    console.log('Promedio Desaprobados', promedio2.toFixed(2));
}

const getArrayDesaprobados = (arrayNotas) => {
    const desaprobados = arrayNotas.filter(element => element.nota < 13)
    console.log(desaprobados);
}

const getNewArrayNotas = (arrayNotas) => {
    const newNotas = arrayNotas.map(element => {
        return { estudiante: element.nombre, nuevaNota: (element.nota * 3) / 2 }
    });
    console.log(newNotas);
}

getNotas(alumnos);
getArrayDesaprobados(alumnos);
getNewArrayNotas(alumnos);