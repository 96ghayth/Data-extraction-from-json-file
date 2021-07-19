const data = require('./codebeautify.json');//importer des données a partir d'un fichier json 

let amounts_data = data.amounts.map((el)=>el.data);//mapper les objets de tableaux amounts vers les attribus data.
let lst = data.amounts.map((el)=>el.text);//mapper les objets de tableaux amounts vers les attribus text.//console.log(amounts_data);
let res1 = lst.map(el=>{ let res = el.match(/([^*1-9@#]+\s)+(\d+\.\d+)/); if(res) return res[1]}).filter(el=>el);
//  expression regulaire pour eliminer les chaines non souhaités. 
//console.log(res1.splice(res1.length-3));
//console.log(res1);
console.log(lst);


//autre soulution mais qui est specefique à notre problème 
/*for(let i=0;i<lst.length;i++){
  //console.log(lst[i]);
  let newtab = lst[i].replace(/[0-9_.]/g, '').replace( / F/,'');
  console.log(newtab);
  
     }*/