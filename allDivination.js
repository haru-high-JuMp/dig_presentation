'use strict'
// Please don't delete the 'use strict' line above

// 総合運
const all = {
    1: ["大事な何かが404する", "スループットが出ない1日", " 人生の何かが404する予感", "410 Gone", "ちょっとした発言が大炎上"],
    2: ["ルール変更に振り回される", "スクラムで何とか乗り切ろう", "IE確認はお早めに", "SNSでのイキリ発言に注意"],
    3: ["予期せぬ炎上の粉が届く", "レスポンシブルな1日", "プロジェクトがうまくいく1日", "設計実装は問題なし", "HelloWarldな1日に"],
    4: ["事前調査と行動次第で運勢が変わる", "SNS断ちで1日が安定稼働", "人の金で焼肉食べれるかも", "嬉しいExceptionが待っている"],
    5: ["リファクタリングされ無敵の1日に", "自由自在レスポンシブルな1日に", "見通しの良い最高の1日", "バグなし無敵の一日に"]
};

// 健康運
const health = {
    1: ["インフルエンザに注意", "脆弱性あり。検診受けよう", "腱鞘炎が治らない", "目の病気に注意"],
    2: ["脆弱性あり。筋トレはいいぞ", "飲みすぎ注意", " 時間がないからと通院しないと凶"],
    3: ["目のピクピクに注意", "目が疲れ気味!目を温めよう", "不眠症になる気配あり", "脆弱性あり。スポセンを走ろう！"],
    4: ["肩こりが解消方向に向かう", "ジムに入会すると吉", "立って仕事をすると吉"],
    5: ["デスマに耐えうる体が手にはいる", "花粉症が軽くなる", "始業前に10kmランニングで大吉"]
};

//仕事運
const work = {
    1: ["退会リンクを隠すという要件が来る", "rm -rf /ですべてが消える", "仕様変更に追われる", "全メソッドに脆弱性発生"],
    2: ["バグとの戦いに苦戦", "組織作りにかかわると良し", "脆弱性に注意", "仕様変更が入るかも", "これ俺の仕事?と思う業務を振られる"],
    3: ["バグもなくみんなから褒められる", "面倒なPJでも君が引っ張れば上手くいく", "一番手抜きのデザインが採用", "疎結合な設計が舞い降りる", "大規模のリファクタリングを任される", "バグとの戦いに打ち勝つ", "信頼できる仲間を見つけると良し", "前倒しで実装が進む"],
    4: ["重要PJを任される、期待の証拠!", "高凝集なモジュールが完成", "PJがオンスケで進む", "バグに苦しまない1日、天才!", "コードめっちゃ褒められる", "説明しただけなのに褒められる"],
    5: ["説明しただけなのに褒められる", "完璧な疎結合が実現", "天才と称賛の嵐, CTO就任!?", "よろしくお願いしま～す！+ Enterでバグ解決"]
};

// 恋愛運
const love = {
    1: ["同棲相手に401 Unauthorizedされる", "出会いが404 not found", "204 No Content", "403 Forbidden", "410 Gone"],
    2: ["今必要なのは恋愛よりコードだろ?", "マッチングアプリでは見つからぬ", "Twitterで探すのはやめておけ", "同業と付き合うと面倒なことに"],
    3: ["同期の異性と相性良し", "HGP創英角ポップ体な来客あり", "ジムで出会いがあり", "指のきれいな人とペアプロできる", "イケボの人とペアプロができる"],
    4: ["気になる人とモニタ越しに目が合う", "金融システム並みに安定した恋愛に", "新しい職場で出会いあり", "久々に連絡する人とご縁あり", "200 OK"],
    5: ["意中の相手からcommitされるかも!?", "愛のSSLが発行される", "想い人と蜜結合になれるかも?", "恋のpull requestが止まらない"]
};

// ラッキーアイテム
const luckItem = {
    1: ["BUFFALO", "ELECOM", "FUJITSU", "SONY", "Logicool", "NEC", "Apple", "ASUS", "HP", "DELL", "Razer", "LG", "iiyama", "Anker", "NVIDIA", "Intel", "AMD", "Lenovo"],
    2: ["ノートパソコン", "ディスプレイ", "タブレット", "キーボード", "テンキー", "マウス", "イヤホン", "ヘッドホン", "CPU", "GPU", "スピーカー", "マイク"],
    3: ["Jetson", "RasPi", "Arduino", "M5Atom", "M5Stack", "NUC", "Realsense D455", "MYNT EYE", "HDMIケーブル", "DVIケーブル", "プリンター", "フロッピーディスク", "CD", "ゲームボーイ",  "ワープロ", "LiDAR", "aibo", "peppar", "LOVOT", "Qoobo", "O'Reilly", "キタミ式", "プロテイン", "アルコール", "ピンクのtabキー", "ワンチャン", "ダンベル", "サクラエディタ", "Atom"]
};

// ラッキーカラー
const luckColer = [
    "#000000", "#f0f8ff", "#008b8b", "#ffffe0", "#ff7f50",
    "#696969", "#e6e6fa", "#008080", "#fafad2", "#ff6347",
    "#808080", "#b0c4de", "#2f4f4f", "#fffacd", "#ff4500",
    "#a9a9a9", "#778899", "#006400", "#f5deb3", "#ff0000",
    "#c0c0c0", "#708090", "#008000", "#deb887", "#dc143c",
    "#d3d3d3", "#4682b4", "#228b22", "#d2b48c", "#c71585",
    "#dcdcdc", "#4169e1", "#2e8b57", "#f0e68c", "#ff1493",
    "#f5f5f5", "#191970", "#3cb371", "#ffff00", "#ff69b4",
    "#ffffff", "#000080", "#66cdaa", "#ffd700", "#db7093",
    "#fffafa", "#00008b", "#8fbc8f", "#ffa500", "#ffc0cb",
    "#f8f8ff", "#0000cd", "#7fffd4", "#f4a460", "#ffb6c1",
    "#fffaf0", "#0000ff", "#98fb98", "#ff8c00", "#d8bfd8",
    "#faf0e6", "#1e90ff", "#90ee90", "#daa520", "#ff00ff",
    "#faebd7", "#6495ed", "#00ff7f", "#cd853f", "#ff00ff",
    "#ffefd5", "#00bfff", "#00fa9a", "#b8860b" , "#ee82ee",
    "#ffebcd", "#87cefa", "#7cfc00", "#d2691e", "#dda0dd",
    "#ffe4c4", "#87ceeb", "#7fff00", "#a0522d", "#da70d6",
    "#ffe4b5", "#add8e6", "#adff2f", "#8b4513", "#ba55d3",
    "#ffdead", "#b0e0e6", "#00ff00", "#800000", "#9932cc",
    "#ffdab9", "#afeeee", "#32cd32", "#8b0000", "#9400d3",
    "#ffe4e1", "#e0ffff", "#9acd32", "#a52a2a", "#8b008b",
    "#fff0f5", "#00ffff", "#556b2f", "#b22222", "#800080",
    "#fff5ee", "#00ffff", "#6b8e23", "#cd5c5c", "#4b0082",
    "#fdf5e6", "#40e0d0", "#808000", "#bc8f8f", "#483d8b",
    "#fffff0", "#48d1cc", "#bdb76b", "#e9967a", "#8a2be2",
    "#f0fff0", "#00ced1", "#eee8aa", "#f08080", "#9370db",
    "#f5fffa", "#20b2aa", "#fff8dc", "#fa8072", "#6a5acd",
    "#f0ffff", "#5f9ea0", "#f5f5dc", "#ffa07a", "#7b68ee"
];

/**
 * 配列からランダムの要素を取り出す関数
 * @param {array} inputArray - 与えられた関数に渡す実引数
 * @returns {string} 与えられたは配列の要素(ランダムで取得)
 */
function getRandomElement(inputArray){
    // console.log(inputArray);
    return inputArray[Math.floor(Math.random() * inputArray.length)];
}

/**
 * オブジェクトからランダムのキーを取り出す関数
 * @param {array} inputObject - 与えられた関数に渡す実引数
 * @returns {number} キー名を返す 
 */
 function getRandomKey(inputObject){
    const inputKeys = Object.keys(inputObject);
    return inputKeys[Math.floor(Math.random() * inputKeys.length)];
}