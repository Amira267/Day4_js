///constructor


function Person (fullName, money){
    this.fullName = fullName;
    this.money = money;

    this.sleep =function(hrs){
        if( hrs == 7)
            this.sleepMood = "Happy";
        else if (hrs > 7)
            this.sleepMood  = "lazy";
        else 
            this.sleepMood = "Tired";
    }
    
    this.eat =function(meals){
        if(meals == 3)
            this.healthRate = 100;

        else if (meals == 2)
            this.healthRate = 75;

        else
            this.healthRate = 50;

    }
    
    this.buy =function(items){
        this.money -= items*10;
    }

}
p = new Person("AMIRA" , 600 );
p.sleep(7);
p.buy(4);
p.eat(3);
alert(`${p.fullName} ${p.healthRate} ${p.money} ${p.sleepMood}`);

console.log(p)



// /////////////////////////////////////////////////////////////
// ///class


// class  Person{
//     constructor(fullName, money, sleepMood, healthRate){
//           this.fullName =fullName;
//           this.money = money;
//       }  
      
//       sleep(hrs){
//           if( hrs == 7)
//               this.sleepMood = "Happy";
//           else if (hrs > 7)
//               this.sleepMood  = "lazy";
//           else 
//               this.sleepMood = "tired";
//       }
  
//       eat(meals){
//           if(meals == 3)
//               this.healthRate = 100;
  
//           else if (meals == 2)
//               this.healthRate = 75;
  
//           else
//               this.healthRate = 50;
//       }
  
//       buy(items){
//           this.money -= items*10;
//       }
  
  
//   } 
  
  
  
//   p = new Person("MIRA" , 1000 );
//   console.log(p.money)
//   p.sleep(5);
//   p.buy(7);
//   p.eat(1);
//   alert(`${p.fullName} ${p.healthRate} ${p.money} ${p.sleepMood}`);
//   console.log(p)
//   console.log(p.money)
  


  
// ///////////////////////////////////////////
// //////////////  factory
// function person(fullName, money, sleepMood, healthRate){
//     return{
    
//             fullName : fullName,
//             money : money,
    
//             sleep : function(hrs){
//                 if( hrs == 7)
//                     this.sleepMood = "Happy";
//                     else if (hrs > 7)
//                       this.sleepMood  = "Lazy";
//                      else
//                      this.sleepMood = "Tired";
//             },

//             eat : function(meals){
//                 if(meals == 3)
//                     this.healthRate = 100;
        
//                 else if (meals == 2)
//                     this.healthRate = 75;
        
//                 else
//                     this.healthRate = 50;
//             },      
            
//             buy : function(items){
//                 this.money -= items*10;
//             }
      
        
      
//         };
           
//     }
      
//      const p= person("Amira", 500);
//      p.buy(8);
//      p.eat(3);
//      p.sleep(8);
//      alert(`${p.fullName} ${p.healthRate} ${p.money} ${p.sleepMood}`);
//      console.log(p)





     ///////////////////////////////////////////////////////////////////////////////
     ///oloo

//  const person = {
//     init(fullName, money){
//         this.fullName = fullName;
//         this.money = money;
    
//         this.sleep =function(hrs){
//             if( hrs == 7)
//                 this.sleepMood = "Happy";
//             else if (hrs > 7)
//                 this.sleepMood  = "Lazy";
//             else 
//                 this.sleepMood = "Tired";
//         }
        
//         this.eat =function(meals){
//             if(meals == 3)
//                 this.healthRate = 100;
    
//             else if (meals == 2)
//                 this.healthRate = 75;
    
//             else
//                 this.healthRate = 50;
    
//         }
        
//         this.buy =function(items){
//             this.money -= items*10;
//         }

//         return this;
//     }

//  }

// const p= Object.create(person).init("Amira", 1000);
//  p.buy(2);
//  p.eat(3);
//  p.sleep(10);
//  alert(`${p.fullName} ${p.healthRate} ${p.money} ${p.sleepMood}`);
//  console.log(p)

 