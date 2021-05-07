/* 
setInterval(run, 100);
m = 0;

function run() {
    m += 5;
    var x = document.getElementById("img");
    x.style.marginLeft = m + 'px';
} 
*/

m = 0;
var y;

function start() {
    y = setInterval(run, 100);

    function run() {
        /*
        m += 5;
        var x = document.getElementById("img");
        x.style.marginLeft = m + 'px';
        */
        if (m == 1200) {
            /*
            clearInterval(x);
            m = 0;
            */
            clearInterval(y);
            m = 0;
        } else {
            /*
            m += 5;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';
            */
            m += 10;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';
        }
    }
}

function stop() {
    clearInterval(y);
}