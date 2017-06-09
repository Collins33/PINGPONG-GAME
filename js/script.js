




$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var number=parseInt($("input#userinput").val());
    var newArray=[];
    var newerArray=[];
    for (var index=1;index<=number;index+=1){
    newArray.push(index)};
    for(var indices=1;indices<=number;indices+=1){
    if(newArray[indices]%3===0){newArray[indices]="ping"}
    else if(newArray[indices]%5===0){newArray[indices]="pong"}
    newerArray.push(newArray[indices]);
    }

    $("#results").text(number);
    alert(newArray);
    
  })
});
