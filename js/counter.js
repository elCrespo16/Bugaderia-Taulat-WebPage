var number = 0;
var startCounting = false;

onmessage = function (oEvent) {
    number = oEvent.data;
};

function addNpost(){
    ++number;
    self.postMessage(number);
}

function counter () {
    setInterval(addNpost,150);
}

counter();
