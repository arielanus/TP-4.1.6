var netoGravado= prompt("Ingrese un monto")
const IVA=1.21
var importeTotal=netoGravado*IVA
var descuento=importeTotal*0.2
 if(importeTotal>1000){alert(importeTotal-descuento)}else{alert(importeTotal)}
