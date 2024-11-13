<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page </title>
</head>
<body>
<h1> Hello world</h1>
    <input type = "text" id = "txt">
    <button id = "btn" >changed text</button>


</body>
<script src="jquery-3.7.1.min.js"></script>
<script>
    var  d = "welcome";
    $('#btn').function(){
        $.ajax({
        url:'data.php',
        type:'post',
        data:{hello:d,bye:'bye'}
        success:function(response){
            alert(response)
        },
    error:function(){}
        
    })
    }
   
</script>
</html>