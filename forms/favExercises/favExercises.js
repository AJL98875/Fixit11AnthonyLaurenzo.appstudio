var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  for (i=0;i<exercises.length;i++){
    selExercises.addItem(exercises[i])
  }
  for (i=0;i<coreExercises.length;i++){
    selExercises.addItem(coreExercises[i])
  }
}

btnNextPage5.onclick=function(){
  ChangeForm(mobileNav)
}
selExercises.onfocusout=function(){
  let message = "Your chose:" 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + " "+ selExercises.text[i]
  lblExercises.value = message
}