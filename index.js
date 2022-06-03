// Calcular factorial de 10 con bucle for

let r = 1;
for(let i = 10; i > 0; i--) {
    r *= i;
    console.log(r);
}

// Calcular factorial de 10 con bucle while

let dato = 10;
let r2 = 1;
while(dato > 0) {
    dato--;
    r2 *= dato;
    console.log(r2);
}

// Calcular factorial de 10 con while, if y break

let dato2 = 10;
let r3 = 1;
while(dato2 > 0) {
    dato2--;
    if(dato2 === 1) {
        break;
    } else {
    
        r3 *= dato2;
        console.log(r3);
    }

    
}