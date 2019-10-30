let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  for (i = 0; i <= goodFoods.length - 1; i++) 
    Listgroup1.addItem(goodFoods[i])
}


Listgroup1.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
    return
   
   lblResult.value="You picked " + goodFoods[choice]+"-that is a great choice!"

}

btnNextPage2.onclick=function(){
  ChangeForm(dessertVoting)
}