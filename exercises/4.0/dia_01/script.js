let a = 10;
let b = 20;

console.log(a + b);

let c = 10;
let d = 20;

console.log(c - d);

let e = 10;
let f = 20;

console.log(e * f);

let g = 10;
let h = 20;

console.log(g / h);

let i = 10;
let j = 20;

console.log(i % j);

let k = 10;
let l = 20;

if(k > l){
    console.log(k)
}else{
console.log(l)
}

let m = 10;
let n = 20;
let o = 30;

if(m >  n , m > o){
    console.log(m + ' é o resultado maior')
}else if (n > m , n > o){
    console.log(n + ' é o resultado maior')
}else{
console.log(o + ' é o resultado maior')
}

let p = 10;
let q = 20;
let pq = p-q;

if(pq = Number<0) {
    console.log("negative")
    }else{
    console.log("positive")
    }

let r = 60;
let s = 60;
let t = 60;
let rst = r + s + t;

if(rst = 180){
    console.log(true)
}else{
    console.log(false)
}

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
    default:
    console.log('Erro, peça inválida!');
    break;
};

let resultado = 197

if(resultado < 0 || resultado > 100) {
    console.log('error');
    }else if (resultado >= 90) {
    console.log('A');
    }else if (resultado >= 80) {
    console.log('B');
    }else if (resultado >= 70) {
    console.log('C');
    }else if (resultado >= 60) {
    console.log('D');
    }else if (resultado >= 50) {
    console.log('E');
    }else {
    console.log('F');
    }


