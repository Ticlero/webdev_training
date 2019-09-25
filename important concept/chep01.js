function three(){
    console.log("i love js");
    throw Error("omg im am an erro");
}
function two(){
    three();
}
function one(){
    two();
}
function zero(){
    one();
}

zero();