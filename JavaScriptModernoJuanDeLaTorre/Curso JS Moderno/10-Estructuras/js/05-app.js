const metodoPago = 'efectivo';
const pagar=()=> console.log('Pagando...');
 switch (metodoPago) {
     case 'efectivo':
         pagar();
         break;
    case 'cheque':
          console.log(`Pagaste con ${metodoPago}`);
         break;
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
         break;
 
     default:
         console.log(`Aún no has seleccinado un método de pago o método de pago no Soportado`);
         break;
 }

