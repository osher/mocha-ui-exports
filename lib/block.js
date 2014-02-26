module.exports = block;

function block(f){  
    if ('function' !== typeof f) 
        throw new Error( "Wrong argument to function block(1): " + f );
    return f() 
}