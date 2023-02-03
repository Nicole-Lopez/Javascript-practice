// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }

// keys: a, a1, a2, a3, f, a, c, o, b, c --> 10

var countProps = function(obj) {
    // Tu código aca:
    if (obj.constructor.toString().indexOf("Object") > -1) {
        let res= 0

        Object.entries(obj).forEach(([key, value]) => {
            res+= 1 + countProps(value)
        });        

        return res
    }else{
        return 0
    }
}

