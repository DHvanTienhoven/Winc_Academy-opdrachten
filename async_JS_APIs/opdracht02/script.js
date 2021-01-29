const huiswerkMaken = (vak, callback) => console.log(`oke, oke, ik ga nu mijn ${vak} huiswerk maken`);
const klaarMetHuiswerk = () => console.log(`kijk, paps, mams, ik ben klaar met huiswerk!`)

huiswerkMaken(`wiskunde`, klaarMetHuiswerk)
setTimeout(klaarMetHuiswerk, 1000)