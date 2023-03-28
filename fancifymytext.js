function new_function()
{
    //Font Size 
    document.getElementById("text_id").style.fontSize="2em";
    alert("Hello, world!");

    //Checks which radio button of the two is selected
    //When Fancy is checked , font is changed 
    //When Boring is checjed, font goes back to normal 
    if(document.getElementById('fancy_radio_button').checked==true){

        //If checked, font changes to bold 
        //Font color gets changed to blue 
        //Font becomes underlined
        document.getElementById("text_id").style.fontWeight="bold";
        document.getElementById("text_id").style.color="blue";
        document.getElementById("text_id").style.textDecoration="underline";
    }

    if(document.getElementById('boring_radio_button').checked==true){
        
        document.getElementById("text_id").style.fontWeight="normal";
    }
    
}

function moo(){
    //Changes text to uppercase lettering 
    var text=document.getElementById("text_id").value;
    var uppercase_text=text.toUpperCase();

    //Adds the -Moo suffix to end of the word in each sentence 
    //Considers the period character 

    var split_text=uppercase_text.split(".");
    suffixed_text=split_text.join("_Moo");
    document.getElementById("text_id").value=suffixed_text;
}

