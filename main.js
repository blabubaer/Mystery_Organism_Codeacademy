

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(id,dna) {
  var pAequor = {
    specimenNum:id,
    dna:dna,
    mutate: function mutate(){
      //choose random base
      var randomNumber = Math.floor(Math.random()*this.dna.length-1);
      var currentBase = this.dna[randomNumber]
      //console.log("the current base is: "+currentBase)
      var newBase
      do {
        newBase = returnRandBase()
        //console.log("the new base is: "+newBase)
      } while(newBase == currentBase);
      this.dna[randomNumber] = newBase
    },
    compareDNA: function compareDNA(scndpAequor){
      var counter = 0;
        for (const i in this.dna){
          if(this.dna[i]==scndpAequor.dna[i]){
            counter++;
          }
        }
      var percentage =Math.round( (counter/this.dna.length) * 100);
      console.log("Specimen Nr."+this.specimenNum+" and specimen Nr."+scndpAequor.specimenNum+" have ca. "+percentage+"% DNA in common");
    },
    willlikelySurvive: function willlikelySurvive() {
      var counter= 0;
      for(const i in this.dna){
        if(this.dna[i] == "C" || this.dna[i]=="G"){
          counter++;
        }
      }
      if(counter/this.dna.length >=0.6) return true;
      return false
      
    }
  }
  return pAequor
  
}


// var pAequor1 = pAequorFactory(1,mockUpStrand());
// console.log("The current DNA is: " + pAequor1.dna)
// var pAequor2 = pAequorFactory(1,mockUpStrand());
// console.log("The current DNA is: " + pAequor2.dna)
// console.log(pAequor1.willlikelySurvive());
//pAequor1.compareDNA(pAequor2);
//pAequor1.mutate()
