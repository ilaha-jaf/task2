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