if(!Array.prototype.$flatMap) {

    Array.prototype.$flatMap = function(cb) {
        this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), []);
    }
}