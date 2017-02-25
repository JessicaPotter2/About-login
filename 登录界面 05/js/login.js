var bgImgUrl = 'img/bg{num}.jpg', bgNum,
    bgImgArr = [],
    bgDiv = document.getElementById("bg");
// 组合数组 此处 200 为 图开始序号 结束 210
for (var i=2; i <= 6; i++){
  bgImgArr.push(bgImgUrl.replace('{num}', i));
}
console.log(bgImgArr);
setBGimg();
function setBGimg(d){
  if(!bgNum || bgNum > bgImgArr.length) bgNum = 0;
  bgDiv.style.opacity = .001;
  setTimeout(function(){
    bgDiv.style.backgroundImage = 'url('+ bgImgArr[bgNum] +')';
    bgDiv.style.opacity = 1;
  }, 1000);
  bgNum++;
  if(typeof d == 'undefined') 
    setInterval(function(){setBGimg(true);}, 6000);
    // 上一行的 6000 是背景图片自动切换时间(单位 毫秒)
    }