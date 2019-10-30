btnNextPage4.onclick=function(){
  ChangeForm(favExercises)
}

rdoPersonType.onclick=function(){
    if (rdoPersonType.value == 0)
      lbldescribe.value= "I would agree that you are a 'Optimistic' person too" 
    else if (rdoPersonType.value == 1)
      lbldescribe.value= "I would agree that you are a 'Pessimistic' person too"
    else if (rdoPersonType.value == 2)
      lbldescribe.value= "I would agree that you are a 'Trusting' person too"
    else if (rdoPersonType.value == 3)
      lbldescribe.value= "I would agree that you are a 'Envious' person too"
}
