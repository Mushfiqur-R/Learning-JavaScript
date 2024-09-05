 /* there 2 way to declare a object
 using literals and constructor.
singletone:construtor diye jokhon banano hoy. because object ektai hoy. */
/* Object literals */
const jsuser={
    name:"fahim",
    "fullname":"Mushfiqur Rahman Fahim"
}
console.log(jsuser.name);
console.log(jsuser["fullname"]);
/*dot diye access korar limitation key jodi string hoy then dot diye
access kora jayna.*/

// *** Interview Questions ***
/* Question: ekta symbol nao. setake object er key te add koro and print kore dekhao. */
const create_symbol=Symbol("key1");
const symboltest={
    name:"fahim",
    "fullname":"Mushfiqur Rahman Fahim",
  //  create_symbol:"mykey1"// type string asbe.
    [create_symbol]:"key1"
}
//console.log(typeof(symboltest.create_symbol));//output : String/
//but actual output needed Symbol.so array r moto kore nite hobe dot diye hobena.and create_symbol key [] vetor lekhte hobe
console.log(typeof symboltest[create_symbol])
console.log(symboltest[create_symbol])

// kono value lock korte chaile object ke  freeze() method diye lock kora jabe.
console.log(symboltest)
