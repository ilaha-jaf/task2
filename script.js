//üsul 1
function buildFunctions() {
    var arr = [];
    for (var index = 0; index < 3; index++) {
        arr.push(
            (function (n) {
                return function(){
                    console.log(n);

                }
            }(index))
        )

    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//üsul 2

function buildFunctions() {
    let arr = [];
    for (let index = 0; index < 3; index++) {
        arr.push(
            function () {
                    console.log(index);
            }
        )

    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();