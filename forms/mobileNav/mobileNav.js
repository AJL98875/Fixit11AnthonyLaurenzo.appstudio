
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  /* add a switch here to take the user to the form
     they chose. 
  */
  switch(s) {
    case "Log in":
      ChangeForm(loginCU)
      break
    case "Favorite Foods":
      ChangeForm(favFoods)
      break
    case "Dessert Voting":
      ChangeForm(dessertVoting)
      break
    case "Describe Me":
      ChangeForm(dessertVoting)
      break
    case "Favorite Exercises":
      ChangeForm(dessertVoting)
      break
}
}

btnPreviousPage.onclick=function(){
  ChangeForm(favExercises)
}