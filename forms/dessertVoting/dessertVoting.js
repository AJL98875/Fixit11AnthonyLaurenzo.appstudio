var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
  for (i = 0; i <= dessertList.length - 1; i++) 
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
        drpDesserts.value = s   // make dropdown show choice user made
        lblcomp.value="You picked"+drpDesserts.selection+"-that is a great choice!"
        NSB.MsgBox("s is " + s + " and .selection is " + drpBestMajor.selection)
    }
}

btnNextPage3.onclick=function(){
  ChangeForm(describeYou)
}
