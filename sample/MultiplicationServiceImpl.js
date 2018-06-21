

 class MultiplicationServiceImpl {
multiply(a, b, result) {
    console.log('service invoke'+a+' '+b);
    try{
    
    setTimeout(function k(){result(null,(a*b))}, 10000);
    }catch(e){
        console.log(e);
        result(e);
    }
}
}

module.exports = MultiplicationServiceImpl;