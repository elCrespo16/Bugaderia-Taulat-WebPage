var number = 1500;
var startCounting = false;

onmessage = function (oEvent) {
    number = oEvent.data;
    startCounting = true;
};

function addNpost(){
    ++number;
    self.postMessage(number);
}

function counter () {
    setInterval(addNpost,150);
}
while(!startCounting){}
counter();
