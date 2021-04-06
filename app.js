let p1 = 'WOLOX';
let p2 = 'XOLOW';
let band = false;


const anagrama = (p1, p2)=>{
    let palabra1 = [...new Set(p1.split(''))];
    let palabra2 = [...new Set(p2.split(''))];

    for(let i = 0; i<palabra1.length; i++){
    
        if(palabra1.length !== palabra2.length){
    
            // console.log(palabra1, palabra1.length, palabra2, palabra2.length)
            band = false;
            
        }else{
    
            let contiene = palabra2.includes(palabra1[i]);
            
            contiene ? band = true : band = false;
            
            // console.log(palabra1[i], contiene, 'band', band);
        }
    }

    return band
}


const result = anagrama(p1,p2);

result ? console.log(`La palabra ${p2} SI es un anagrama de ${p1}`) : console.log(`La palabra ${p2} NO es es un anagrama de ${p1}`);

module.exports = anagrama;