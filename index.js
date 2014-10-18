/**
 * Created by Liza on 17.10.2014.
 */
 //IRA's CODE BEGIN
 var moveBase = [
		//position layout [Left Hand, Right Hand, Left Leg, Right Leg] 1 - if active
		{id: 1, name: "lHandUp", functionName: "", x:"", y:"", position: [1,0,0,0]},
		{id: 2, name: "rHandUp", functionName: "", x:"", y:"", position: [0,1,0,0]},
		{id: 3, name: "lLegToSide", functionName: "", x:"", y:"", position: [0,0,1,0]},
		{id: 4, name: "rLegToSide", functionName: "", x:"", y:"", position: [0,0,0,1]},
		{id: 5, name: "lHandToSide", functionName: "", x:"", y:"", position: [1,0,0,0]},
		{id: 6, name: "rHandToSide", functionName: "", x:"", y:"", position: [0,1,0,0]},
		{id: 7, name: "mixer", functionName: "", x:"", y:"", position: [1,1,1,1]}
	];

	var humanPosition = {position: [0,0,0,0], moveActiveId: "1111"};
    var recordedBeatArray = [];
    var ifRecordBeat = 0;
	var start;
    var end;
$(document).ready(function(){
	$(".beat-block").click(function(){
        if (ifRecordBeat==0){
            checkBeat();
            ifRecordBeat = 1;
            $(".js-beat-start").addClass("hidden");
            $(".js-beat-finish").removeClass("hidden")
        }else{
            $('body').off("keydown");
            ifRecordBeat = 0;
            $(".js-beat-start").removeClass("hidden");
            $(".js-beat-finish").addClass("hidden");
        }
	})



	/*$('.js-test-block').click(function(){
		var testText = "";
		$.each(moveBase, function(k,v){
			console.log(v.name)
		})

		$(".js-test-wrapper").append(testText);
	})*/


})
var checkBeat = function(){
    var beatLength;
	$('body').on("keydown", function(){
        if (recordedBeatArray.length > 0 ){
            if (end!=undefined){
                start = end;
            }
            end = new Date();
            beatLength = (end.getTime() - start.getTime())/1000;
            beatLength = parseFloat(beatLength.toFixed(1));
            if (beatLength>=0.1){
                recordedBeatArray.push(beatLength);
            }

        }
        else{
            start = new Date();
            recordedBeatArray.push(0);
        }
    });
}
//IRA's CODE END//IRA's CODE END

//by Liza
//clothing for dancer
$('.dancer-make_beauty').on('click', function(){
	if(!$(this).hasClass('_active')){
		$(this).addClass('_active').text('Раздеть ;)');
		$('.dancer-cap, .dancer-scarf').addClass('_active');
	}else if($(this).hasClass('_active')){
		$(this).removeClass('_active').text('Сделать красиво ;)');
		$('.dancer-cap, .dancer-scarf').removeClass('_active');}
});

//end by Liza