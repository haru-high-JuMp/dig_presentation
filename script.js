'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const paramObject = {
    all: [],
    health: [],
    work: [],
    love: [],
    luckItem: [],
    luckColer: undefined
}

const getRandomComents = () => {
    for (const key in paramObject) {
        if (Object.hasOwnProperty.call(paramObject, key)) {
            switch (key) {
                case "all":
                    paramObject[key].push(getRandomKey(all));
                    console.log(paramObject[key][0]);
                    paramObject[key].push(getRandomElement(all[paramObject[key][0]]));
                    break;
            
                case "health":
                    paramObject[key].push(getRandomKey(health));
                    paramObject[key].push(getRandomElement(health[paramObject[key][0]]));
                    break;

                case "work":
                    paramObject[key].push(getRandomKey(work));
                    paramObject[key].push(getRandomElement(work[paramObject[key][0]]));
                    break;

                case "love":
                    paramObject[key].push(getRandomKey(love));
                    paramObject[key].push(getRandomElement(love[paramObject[key][0]]));
                    break;

                case "luckItem":
                    paramObject[key].push(getRandomKey(luckItem));
                    console.log(paramObject[key][0] === "1" || paramObject[key][0] === "2")
                    if (paramObject[key][0] === "1"){
                        paramObject[key].push(getRandomElement(luckItem[paramObject[key][0]]));
                        paramObject[key].push(getRandomElement(luckItem["2"]));
                    } else if (paramObject[key][0] === "2"){
                        paramObject[key].push(getRandomElement(luckItem["1"]));
                        paramObject[key].push(getRandomElement(luckItem[paramObject[key][0]]));
                    } else {
                        paramObject[key].push(getRandomElement(luckItem[paramObject[key][0]]));
                    }
                    break;
                
                case "luckColer":
                    paramObject[key] = getRandomElement(luckColer);
                    break;
            
                default:
                    break;
            }
        }
    }
    console.log(paramObject);
}

// 
const createChart = () => {
    document.getElementById("all").innerHTML = `<td>${paramObject["all"][1]}</td>`;
    document.getElementById("love").innerHTML = `<td>${paramObject["love"][1]}</td>`;
    document.getElementById("work").innerHTML = `<td>${paramObject["work"][1]}</td>`;
    document.getElementById("health").innerHTML = `<td>${paramObject["health"][1]}</td>`;
    document.getElementById("chart").style.display ="block";
    console.log(paramObject["luckItem"])
    if (paramObject["luckItem"].length === 3){
        document.getElementById("item").innerHTML = `<td>${paramObject["luckItem"][1]}の${paramObject["luckItem"][2]}</td>`
    } else {
        document.getElementById("item").innerHTML = `<td>${paramObject["luckItem"][1]}</td>`
    }
    document.getElementById("luckycolor").style.backgroundColor = paramObject["luckColer"];
    document.getElementById("colorcode").textContent = paramObject["luckColer"]
    // change star rating
    document.querySelector("#all_rate").dataset.rate = String(paramObject["all"][0]);
    document.querySelector("#love_rate").dataset.rate = String(paramObject["love"][0]);
    document.querySelector("#health_rate").dataset.rate = String(paramObject["health"][0]);
    document.querySelector("#work_rate").dataset.rate = String(paramObject["work"][0]);
}

// ボタンクリック時の関数 占い表を表示させる
function clickDisplayAlert(){
    getRandomComents()
    createChart()
}

function retryParam(){
    console.log("retry")
    for (const key in paramObject) {
        if (Object.hasOwnProperty.call(paramObject, key)) {
            if (key === "luckColer"){
                paramObject[key] = undefined;
            } else {
                paramObject[key] = [];
            }
        }
    }
    clickDisplayAlert();
}



// twitterにshareをするボタン
function shareTwitter(){
    // 出力結果を取得
    // let text = document.getElementById("tweet-text").innerText;
    // オプションパラメータを設定
    let hashtags = "今日のparams";
    let url = encodeURIComponent(location.href)  // location.hrefは今いるURL
    let data_text = "これはテストです" + "%0D%0A" + "これもてすとだよ" + "%0D%0A"

    // URLを生成して遷移
    window.open("https://twitter.com/share?text=" + data_text + "&hashtags=" + hashtags + "&url=" + url);
}
