function aiUnderstand(sentence){
  sentence = sentence.toLowerCase();

  for(const ai of aiDB){
    for(const word of ai.keywords){
      if(sentence.includes(word)){
        return ai;
      }
    }
  }
  return null;
}
