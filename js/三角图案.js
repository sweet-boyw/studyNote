let n = 20;
let string = " "
for (let i = 0; i < n; i++){
    for(let j = n; j > 0; j--){
        if(i >= j){
            if(j % 2 == 0){
            string += "# "
            }
            else{
                string += "* "
            }
        }else{
            string += " "
        }
    }
    string += "<br>"
}
document.write(`<pre>${string}</pre>`)