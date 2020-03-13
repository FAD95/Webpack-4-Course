import "../styles.css";
import text from "./text";

text();

if(module.hot){
    module.hot.accept('./text', () =>{
        console.log('he recargado en caliente');
        text();        
    })
}
