var promiseObject = new Promise(function(resolve,reject){
    resolve([  
        {name:"Ryveshma" , city :"Hyd"},
        {name:"Vaishnavi" , city :"Nzb"},
    ]);
});
promiseObject.then(function(successdata){
    console.log("Then executed");
    console.log(successdata);
}).catch(function(errordata){
    console.log("Catch executed");
    console.log(errordata);
});