function createGraph() {
    if (data1.value > 100 || data1.value < 0 || data1.value == '') {
        alert('Please, insert numbers between 0 and 100')
    } else {
        let data1 = document.querySelector('#data1')
        document.querySelector('.graph-canvas').innerHTML = `<div class="square" style="height: ${data1.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML = `<div class="space appear">${data1.value}%</div>`
        let data2 = document.querySelector('#data2')
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data2.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">${data2.value}%</div>`
        let data3 = document.querySelector('#data3')
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data3.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">${data3.value}%</div>`
        let data4 = document.querySelector('#data4')
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data4.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">${data4.value}%</div>`
        let data5 = document.querySelector('#data5')
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data5.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">${data5.value}%</div>`
    }
}