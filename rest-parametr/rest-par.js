const arr = [1,2,3]

function nameFunc(a,b, ...rest){
    console.log(rest);
}

nameFunc(1,2,2,3,4)