import React, { useEffect, useState } from 'react'

// Effects always run on the first render (mounting).  !!!!!

const Counter1 = () => {    // to jest counter conditonally added to the DOM

const [count, setCount] = useState(0);

useEffect(()=> {
  console.log("Component has mounted"); // po zaladowaniu strony nie pokaze sie, bo komponent ten jest dodany 
}, [])                                                                           // conditionally do DOM

/* Console.log powyzej - pokaze sie tylko raz gdy component zostanie dodany do DOM for the first time, czyli 
w tym przypadku w App.js mamy warunek, ze dopiero po kliknieciu na button ma sie ten komponent "Counter1.js"pojawic 
w DOM. Nie jest on od razu wpisany w App.js jako <Counter1 /> tylko conditionally: {showBlok && <Counter1 />}, 
czyli po kliknieciu na button nasz state "showBlock" zmieni sie na true i komponent dopiero pojawi sie w DOM.
Gdyby od razu byl wpisany w App.js jako <Counter1 /> to console.log w useEffect pojawi natychmiast po zaladowaniu strony.
Za kazdym razem, kiedy komponent zostanie wpisany w DOM odpali sie ten useEffect. Kiedy zostanie komponent schowany
za pomoca jakiegos przycisku (usuniety z DOM) a potem ponownie dodany do DOM, to useEffect odpali sie po takim dodaniu 
do DOM. */


/* Inne useEffecty w tym przypadku:

* Component did update: console.log wyswietla sie za kazdym razem, gdy count zmieni swoja wartosc = state has been updated

useEffect(()=> {
  console.log("Component has mounted");                                    
}, [count])  

* Component mounts and unmounts: gdy komponent renders for the first time to the DOM odpali sie 1wszy console.log 1 RAZ!!!
a gdy komponent unmounts, czyli zniknie z DOM, np po nacisnieciu jakiegos buttona, to odpali sie nam console.log z 
returna, tez tylko 1 RAZ !!!
Te console.logi beda odpalaly sie za kazdym razem gdy komponent mounts u unmounts.

useEffect(()=> {
  console.log("Component has mounted"); 
  return () => {                         
    console.log("Component has unmounted");   
}}, [])    

* Gdy komponent mounts , czyli gdy klikniemy na Show button, pojawi sie 1wszy console.log „The count has updated to 0“
Gdy klikniemy na przycisk „Increment the count“ to najpierw pojawi sie console.log z returna „We are in the cleanup,
the count is 0“ i po nim znow 1wszy console.log, ale z updated state: „The count has updated to 1“.
A to dlatego, ze return wykona sie zanim state will be updated i i pokaze nam w returnowanym console.log wartosc 0.
Dopiero po zmianie stanu useEffect will rerun i wykona sie pierwszy console.log z wartoscia zmieniona na 1. 
Czyli return (Cleanup Function) wykona sie najwpierw. 
Return will run one LAST TIME after component is removed from the DOM.

useEffect(()=> {
  console.log(`The count has updated ${count} `); //--> pokaze sie gdy komponent mounts-zostanie dodany do DOM
  return () => {                         
    console.log(`We are in the CleanUp - the count is now: ${count}`); // return zwraca wartosci
  } }, [count])                                                       // z wczesniejszego renderowania (gdy kompponent dies)
  
  // ogolnie w useEffect jest tak, ze kod przed returnem pokazuje sie gdy component mounts, a return
  // wykonuje sie, gdy komponent unmounts (umiera). W tym przykadzie komponennt mount i console.log
// sie odpala, a gdy zmieni sie "count" to useEffect zwraca return, czyli wartosci z umarlego komponentu,
//ktory juz nie istnieje, a dopiero potem odpala dla nowego komponentu ze zmienionym stanem "count"4
//tego console.loga  
 */

return ( 
    <div>                                    
        <p>Current count: {count}</p>
        <button onClick={()=> setCount(count + 1)}>Increment the count +1</button>
    </div>
  )
}

export default Counter1


/* LIFECYCLE
3 stages that happen in the react component:

1) Mounting - component gets rendered onto the page for the first time.
Mounting is the process of adding a component to the DOM for the first time.
2) Updates = Rendering- rendering occurs when a component’s state changes.
React updates the DOM after state change.
3) Unmounting - you no longer show that component



*/
