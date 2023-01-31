const http = require('http');
const rupiah = require('rupiah-format')
const host = 'localhost'
const port = 3002

// request adalah data masuk dari luar
// response adalah data keluar dari system
const server = http.createServer(function (request, response){
    const nama = "HENDRY"
    let uang = 500;
    let jajan = 300;
    let sisa = uang - jajan;
    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    const hasil = `halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya sebelumnya ${uang}, sekarang sisa ${sisa}.`

    response.statusCode = 200;
    response.end(hasil);
})

server.listen(port, host, function (){
    console.log(`server menyala di ${host}:${port} `);
});