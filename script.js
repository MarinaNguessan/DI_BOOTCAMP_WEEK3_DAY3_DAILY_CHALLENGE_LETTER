/**
 * @author:N'GUESSAN MARINA
 */

/* Création d'un text de type enter qui prend/ affiche uniquement les lettres  */



function Save( event){
    let SaisieMot = event.SaisieMot || event.which;
    if(SaisieMot >= 65 && SaisieMot <= 90){
        return true;
    }

    /* Autoriser la touche Backspace= 8, Tab=9, et Escape = 32, Del = 46, Esc = 27 */
    if(SaisieMot== 27 || SaisieMot == 32|| SaisieMot == 8 || SaisieMot == 46 || SaisieMot == 9 ){
        return true;
    }
    /* Bloquer toutes les autres touches */
      return false;    
    }

    