var height = 0;
var attempt = 0;
var intS = 0;
function scrollToEndPage() {
console.log("hight:" + height + " scrollHeight:" + document.body.scrollHeight + " att:" + attempt  );

if (height < document.body.scrollHeight)
{
   
    window.scrollTo(0, height);
    attempt++;
    height = parseInt(height) + attempt;
}
else
{
    clearInterval(intS);
}
}
intS = setInterval(scrollToEndPage,100);