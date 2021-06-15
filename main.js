
//1.  Palindrom
function Palindrom(text){
    let str='';
    LCase=text.toLowerCase();
    toArray=LCase.split('');
    n=toArray.length;
    for(i=n-1;i>=0;i--){
       str=str+toArray[i];
    }
    if(str==LCase){
        console.log('Palindrom Word !');
    }else {
        console.log('Not A Palindrom Word');
    }
    }
    
    Palindrom('Malam');
    
    //2. Reverse Word
    function reverseWord(text2){
    toArray2=text2.split(' ');
    n2=toArray2.length;
    let str2='';
    if(n2>1){
    for(i=n2-1;i>=0;i--){
        str2=str2+' '+toArray2[i];
    }
    console.log('reverse word: '+str2);
    }else {
        console.warn ('Please input more than 1 word !');
    }
    }
    
    reverseWord("saya senang belajar Javascript");