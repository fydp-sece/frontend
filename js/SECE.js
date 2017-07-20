(function () {
	$("#atn-upload-btn").click(function(){
        if ($("#train-list > li").length == 0){
            $("#attenuate-err").html("Please upload training data");
        }
        else {
            $("#attenuate-err").html("");
            $('#atn-file-input').click();
        }
    });

    $("#train-upload-btn").click(function(){
        $('#train-file-input').click();
    });

	$('#atn-file-input').change(function(){
  		var fileName = $(this).val().split('/').pop().split('\\').pop();
        var fileNameProc = "proc_" + fileName;
  		var acceptedFileExtensions = ['.aiff', '.wav', '.mp3'];
  		var fileHasValidExt = false;

        $('#attenuate-bar').width("0px");

  		acceptedFileExtensions.forEach(function(acceptedFileExtension) {
  			if (fileName.endsWith(acceptedFileExtension)) {
  				fileHasValidExt = true;
  			}
  		});

    	if (fileHasValidExt) {
            $("#attenuate-bar").addClass("notransition");
            $('#attenuate-bar').width("0");
            $("#attenuate-bar").removeClass("notransition");
	    	$('#attenuate-bar').width("100%");
            setTransition("#attenuate-bar", "8s");

            setTimeout(function() {
                $("#clips").show();
                $("#stats").show();
                //$("#download-file").css("display", "inline-block");

                //$('#original').attr("src", fileName);
                //$('#processed').attr("src", fileNameProc);
            }, 8000);
    	} else {
    		// invalid file is uploaded
            $("#attenuate-err").html("File does not meet requirements");
    	}
  	});

    $('#train-file-input').change(function(){
        var fileName = $(this).val().split('/').pop().split('\\').pop();
        var acceptedFileExtensions = ['.aiff', '.wav', '.mp3'];
        var fileHasValidExt = false;

        $('#train-bar').width("0px");

        acceptedFileExtensions.forEach(function(acceptedFileExtension) {
            if (fileName.endsWith(acceptedFileExtension)) {
                fileHasValidExt = true;
            }
        });

        if (fileHasValidExt) {
            $("#train-bar").addClass("notransition");
            $('#train-bar').width("0px");
            $("#train-bar").removeClass("notransition");
            setTransition("#train-bar", "5s");
            $('#train-bar').width("100%");

            setTimeout(function() {
                $("#train-list").append($("<li>").text(fileName));
            }, 5000);
        } else {
            // invalid file is uploaded
            $("#train-err").html("File does not meet requirements");
        }
    });

    function setTransition(e, dur){
        $(e).css("-webkit-transition", "width " + dur);
        $(e).css("transition", "width " + dur);
    }
}());