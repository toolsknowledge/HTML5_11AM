this.onmessage = function(e){
    let result = e.data.num1+e.data.num2;
    this.postMessage(result);
}