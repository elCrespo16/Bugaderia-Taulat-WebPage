var number = 0.1;

onmessage = function (oEvent) {
    number = oEvent.data;
};

function addNpost(){
    number += 0.1;
    self.postMessage(number);
}

function counter () {
    setInterval(addNpost,1500);
}
counter();
