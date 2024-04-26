var player_1_name=localStorage.getItem("player_1_name")
var player_2_name=localStorage.getItem("player_2_name")
document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";
var player_1_score=0
var player_2_score=0
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player_2_name;
function send() {
    number1=document.getElementById("number1").value
    number2=document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4> Q. "+ number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(actual_answer == get_answer ){
        if(answer_turn == "player_1"){
            player_1_score = player_1_score +1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score +1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2"
        document.getElementById("player_question").innerHTML =  "Question Turn - " + player_2_name;
    }
    else{
        question_turn = "player_1"
        document.getElementById("player_question").innerHTML =  "Question Turn - " + player_1_name;
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML =  "Answer Turn - " + player_2_name;
    }
    else{
        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML =  "Answer Turn - " + player_1_name;
    }
}  {
    
}