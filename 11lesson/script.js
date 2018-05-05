function randomInteger(min, max) {
var rand = min - 0.5 + Math.random() * (max - min + 1)
rand = Math.round(rand);
return rand;
}

function uu(aa)
{
return Math.round(aa*100)/100;
}
function Creature(name,health,rate_of_attack,rate_of_protection,min_damage,max_damage,speed){ 
this.name = name; 
this.health=health;
this.rate_of_attack = rate_of_attack; 
this.rate_of_protection = rate_of_protection; 
this.max_damage = max_damage; 
this.min_damage = min_damage; 
this.speed =speed; 
this.attackEnemy = function(enemy)
{
if(!enemy.isAlive()) return;

document.write(this.name+" (health="+uu(this.health)+") <br/> attacks "+enemy.name+" <br/> (health="+uu(enemy.health)+")");

a=randomInteger(this.min_damage, this.max_damage)*(100+this.rate_of_attack)/100;
enemy.health=enemy.health-a*(100-enemy.rate_of_protection)/100;

if(!enemy.isAlive()) {
document.write(enemy.name+" killed!");
}

} 

this.isAlive = function(){
if(this.health>0) return true;
return false;
} 
} 

Creature.compareSpeed=function(a, b)
{
if (a.speed < b.speed)
return -1;
if (a.speed > b.speed)
return 1;
return 0;
}

var creature1 = new Creature("creature_1",685,5,5,1,5,3); 
var creature2 = new Creature("creature_2",100,5,5,1,5,6); 
var creature3 = new Creature("creature_3",1000,5,5,1,5,2); 

var creature4 = new Creature("creature_4",700,5,5,1,5,7); 
var creature5 = new Creature("creature_5",1000,5,5,1,5,2); 
var creature6 = new Creature("creature_6",100,5,5,1,5,9); 

team1=[creature1, creature2, creature3];
team2=[creature4, creature5, creature6];

i=0;

do {
c1=team1[i];
r=randomInteger(0, team2.length-1);
c2=team2[r];


c1.attackEnemy(c2);
if(c2.isAlive()) c2.attackEnemy(c1);
if(!c1.isAlive()) team1.splice(i, 1);
if(!c2.isAlive()) team2.splice(r, 1); 

i++;
if(i>=team1.length) i=0; 

}while(team1.length>0 && team2.length>0)

if(team1.length==team2.length) {
console.log("Game drawn!");
}
else if(team1.length>team2.length) {
console.log("Team1 wins!");
}
else console.log("Team2 wins!");