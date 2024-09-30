let arrayNum=[10,20,30,40,50];
let map=arrayNum.map(test);


document.write(map);
function test(result){
    return result * 10;
}




let arrayName= [
    {fname : 'jenifar', lname : 'jui'},
    {fname : 'Lili', lname : 'Alam'},
    {fname : 'jesi', lname : 'akther'},
    {fname : 'zebin', lname : 'akter'},
];
let nameMap=arrayName.map(function(fullname){
    return fullname.fname + ' '+ fullname.lname ;
});


document.write(nameMap);

