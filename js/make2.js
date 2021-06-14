////////////// 만다라트 포맷 구성 //////////////
const $mandalart = document.querySelector("#mandalart .chart");
// console.log($mandalart);

let $mandalart_for = ""

for(i=1; i<=9; i++){
    $mandalart_for += `
        <ul>
            <li><input type="text"></li>
            <li><input type="text"></li>
            <li><input type="text"></li>
            <li><input type="text"></li>
            <li class="component${i}">
                <p>{{target${i}}}</p>
            </li>
            <li><input type="text"></li>
            <li><input type="text"></li>
            <li><input type="text"></li>
            <li><input type="text"></li>
        </ul>
    `
}
// console.log($mandalart_for)
$mandalart.innerHTML = $mandalart_for

/////////////// middle 세부목표 /////////////////////
for(i=1; i<=9; i++){
    if(i==5){
        continue;
    }
    let $mandalart_input = document.querySelector("#mandalart .chart ul:nth-child(5) li:nth-child("+i+") input");
    console.log($mandalart_input)
    $mandalart_input.setAttribute("v-model:value","target"+i);
    $mandalart_input.setAttribute("placeholder","세부목표");
    console.log(i);
}

// $ document.querySelector("#madalart .chart ul:nth-child(5) input")

//////////////// 핵심목표 input 변환 //////////////////
const $core = document.querySelector("#mandalart .chart ul:nth-child(5) li:nth-child(5)");
// console.log(middle);
$core.innerHTML = "<input type='text' placeholder='핵심목표'>";



/////////////////// 세부목표 연동 ////////////////////
let mandalart = new Vue({
    el : '#mandalart',
    data : {
        target1 : '세부목표',
        target2 : '세부목표',
        target3 : '세부목표',
        target4 : '세부목표',
        target6 : '세부목표',
        target7 : '세부목표',
        target8 : '세부목표',
        target9 : '세부목표',
    }
});

