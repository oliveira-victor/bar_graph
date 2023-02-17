let allData = []
let errorMsg = document.querySelector('.error-msg')

function createGraph() {
    let data1 = document.querySelector('#data1')
    let data2 = document.querySelector('#data2')
    let data3 = document.querySelector('#data3')
    let data4 = document.querySelector('#data4')
    let data5 = document.querySelector('#data5')

    allData = [data1.value, data2.value, data3.value, data4.value, data5.value]

    function checkData(data) {
        return data <= 100 && data >= 0
    }

    if (allData.every(checkData) == true) {
        errorMsg.style.display = 'none'

        document.querySelector('.graph-canvas').innerHTML = `<div class="square" style="height: ${data1.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML = `<div class="space appear">A: ${data1.value}%</div>`
        
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data2.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">B: ${data2.value}%</div>`
        
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data3.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">C: ${data3.value}%</div>`
        
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data4.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">D: ${data4.value}%</div>`
        
        document.querySelector('.graph-canvas').innerHTML += `<div class="square" style="height: ${data5.value}%"></div>`
        document.querySelector('.print-numbers').innerHTML += `<div class="space appear">E: ${data5.value}%</div>`
    } else {
        errorMsg.style.display = 'block'
        document.querySelector('.graph-canvas').innerHTML = ''
        document.querySelector('.print-numbers').innerHTML = ''
    }
}