var bn = 0;
var pastbn = 0;



$("img").click(function(){
    if (bn < 7) {

	  bn += 1;
      $(this).attr('src',"img/beaker"+bn+".jpeg");
      console.log(bn);

    } else {
        bn = 0;
        $(this).attr('src',"img/beaker"+bn+".jpeg");
        console.log(bn);
      }
});

$("button").click(function(){


  $(".num"+(pastbn)).hide();
  console.log("number "+bn+ " Created");
  $(".num"+bn).show();
  pastbn = bn;
  alert("Created!!");
});
