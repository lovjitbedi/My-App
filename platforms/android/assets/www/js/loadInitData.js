var LoadData = {

    init = function (){


    var busStopMap = {};
    var busStopName = [];

    //add listener when device ready
    //document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Dummy_DB", "1.0", "Just a Dummy DB", 200000); //will create database Dummy_DB or open it

    //function will be called when device ready
    //function onDeviceReady(){
    //debugger;
        db.transaction(populateDB, errorCB, successCB);
    //}

    //create table and insert some record
    function populateDB(tx) {
    }

    //function will be called when an error occurred
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    //function will be called when process succeed
    function successCB() {
        db.transaction(queryDB,errorCB);
    }

    //select all from SoccerPlayer
    function queryDB(tx){
        tx.executeSql('SELECT * FROM BUS_STOP',[],querySuccess,errorCB);
    }

    function querySuccess(tx,result){

        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            busStopMap[] = row['ID'];
            busStopName.push(row['NAME']);
        });
    }

   $( "#starting-bus-stop" ).autocomplete({
      source: availableTags,
      messages: {
        noResults: '',
        results: function() {}
    }
    });
   $( "#ending-bus-stop" ).autocomplete({
      source: availableTags,
      messages: {
        noResults: '',
        results: function() {}
    }
    });



    }


}