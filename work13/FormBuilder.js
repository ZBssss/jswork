function(window){
    var FormBuilder = function(data){
        this.data = data;
    }
}
FormBuilder.prototype.create = function(){
    var html = '';
    for(var l in this.data){
        var item = {tag:'',text:'',attr:{}, option:null};
        for(var n in this.data[k]){
            iten[n]= this.data[k][n];
        }
        html +=MSBlobBuilder.toHTML(item);
    }
    return '<table>' + html + '</table>';
}
var builder = {
    toHTML:function()
}