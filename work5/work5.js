//九九乘法空表

let str = '<table border="1">'
for(let a=1;a<10;++a){
    str +='<tr>'
    for(var b=1;b<=a;++b){
        //拼接单元格
        str += '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>'
        }
        str +='</tr>'
}
str +='<table>'
//设置div的html文档内容
document.getElementById('table').innerHTML=str

//倒九九乘法空表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str