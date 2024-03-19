function receivesAFunction (callback) {
    callback();
}
function returnsANamedFunction () {
    return function func(){
        console.log('empty!');
    };
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('Anonymous');
    }
};