

function declareWinner(fighter1, fighter2, firstAttacker) {
var alive = 1
//attack a tour de role
//starting with firstAttacker
//si 2 d'abord, 2 attack puis la boucle suivante apres test survie 1

if (fighter2.name === firstAttacker ) {
          fighter1.health = fighter1.health - fighter2.damagePerAttack}

if (fighter1.health < 1) { alive = 0 ; return fighter2.name }

while ( alive === 1 ) {
 
 fighter2.health = fighter2.health - fighter1.damagePerAttack;

if ((fighter2.health < 1) && ( alive === 1 )) { alive = 0;
                           return fighter1.name ; 
                           } ;

    fighter1.health = fighter1.health - fighter2.damagePerAttack;
    
    if ((fighter1.health < 1) && (alive === 1)) { alive = alive +1; 
                               return fighter2.name ;
                               } ;
   
  }
}
