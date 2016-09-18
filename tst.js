var superCounter = function(x){
  var rt={};

  
var wlen=function(x){
    var regexend = /\w\b/g,
    regexbgn = /\b\w/g,
    wlen = [],
     wbgn=[],
    wend=[],
    match=[]
    
while (match = regexend.exec(x)) {
    wend.push(match.index+1); 
}
while (match = regexbgn.exec(x)) {
    wbgn.push(match.index); 
}

console.log(regexbgn,regexend)
for (i=0; i<wbgn.length; i++){
    
    console.log(i,wbgn[i],wend[i])
    wlen.push(wend[i]-wbgn[i]);
}

console.log(wlen)

return wlen


}

try{
rt['chars']= x.length;
    
}catch(e){
    rt['chars']=0
};
try{
rt['spaces']= x.match(/\s/g).length;
}catch(e){
    rt['spaces']= 0
}
try{
rt['letters']= x.match(/\w/g).length;
}catch(e){ rt['letters']=0;rt['words'] = 0; rt['avgLength'] =0; return rt; }
rt['words'] = x.match(/\b/g).length/2;
//console.log('@@@@',wlen(x).reduce((a, b) => a + b),rt.words)
rt['avgLength'] = wlen(x).reduce((a, b) => a + b,0)/rt.words




  return rt;
};


//console.log(superCounter("Count me in!"));

//console.log('***',superCounter("a red dog *** is a still a dog, not a wolf!"));


/*
the loop version of this (for chars,spaces,letters,words) would be to 
- loop through each index of the input string
- maintain counters for all the variables we care about
- use if statement to increment counter (i.e. if the index character is a space and there is a letter after then add word counter by 1)
- stick the counters on the the return obj as properties
- return object

added some basic error handler for edge cases...  i.e.
console.log(superCounter(" "));
console.log(superCounter(""));


*/