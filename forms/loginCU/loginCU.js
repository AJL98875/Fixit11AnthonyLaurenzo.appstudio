loginCU.onshow=function(){
  req1=Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php","POST","j_usename="+inptNetID.value+"%j_password="+inptPassword.value)
}

btnLogin.onclick=function(){
    
    if (req1.status == 200){
      lblResponse.hidden = false
      lblResponse.value = "Your LDAP return code was" + req1.responseText
      //1 good 0 bad
      ChangeForm(favFoods)
    }else{
      //had a problem with the AJAX request
      lblResponse.hidden = false
      lblResponse.value = "Error:" + req1.status     
    }
}

btnNextPage.onclick=function(){
  ChangeForm(favFoods)
}
