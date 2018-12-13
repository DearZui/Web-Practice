function onReadyPromise() {
    return new Promise(function(resolve, reject){
        let readyState = document.readyState;
        if(readyState === 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve);
        }
    })
}
onReadyPromise().then(function() {
    console.log('DOM fully loaded.');
});
console.log('=====Starting=====');
