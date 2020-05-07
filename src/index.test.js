const coolStarWars = require('./index');
const expect = require('chai').expect;

describe('StarWars names', function(){
  describe('all', function(){
     it('should be an array', function(){
       expect(coolStarWars.all).to.be.an('array');
     });

     it('should be an array of string', function(){
       expect(coolStarWars.all).to.satisfy(arrayOfStrings);

       function arrayOfStrings(arr){
         return arr.every(el => typeof el === 'string');
       }
     })

     it('should contain Sheygs Mcpherson', function(){
        expect(coolStarWars.all).to.contain('Sheygs Mcpherson')
     })
  })
   
  describe('random', function(){
    it('should return a random starwars name', function(){
      const randomStarName = coolStarWars.random();
      expect(coolStarWars.all).to.include(randomStarName);
    })
  })
});