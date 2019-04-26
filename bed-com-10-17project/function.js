 function convert()
    {
	  var username=document.getElementById("url").value;
      var  email = document.getElementById('em').value;
      var tem =document.getElementById('item').value;
	  var pcode = document.getElementById('vista').value;
      var place =document.getElementById('type').value;
      var date = new Date(document.getElementById('Date').value);


    //storing item by item

    localStorage.setItem('Username',username);
    localStorage.setItem('Email',email);
    localStorage.setItem('item',tem);
    localStorage.setItem('Pcode',pcode);
    localStorage.setItem('place',place);
    localStorage.setItem('Date',date);
    if (username === localStorage.getItem('Username')&& date === localStorage.getItem('Date')) {

        document.getElementById("converted_url").innerHTML=" You already booke the room on that day";
        form.reset();
      }
      else{
        var name = localStorage.getItem('Username');
        var Type = localStorage.getItem('place');
        var items= localStorage.getItem('item');
    

               
       document.getElementById("welcome").innerHTML= "Dear ,"+name +" you have succesfully buy "+items+" we will deriver it to you using your post code"+Type; 
        alert("Some money will be deducted from your account");
       form.reset(); 

      }
}
  