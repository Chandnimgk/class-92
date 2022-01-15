player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=player1_name+":";
document.getElementById("player2").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : " + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word=get_word.toLowerCase();
    charat1=word.charAt(1);
     lenght_2=Math.floor(word.length/2);
    charat2=word.charAt(lenght_2);
    lenght_mins=word.length-1;
    charat3=word.charAt(lenght_mins);
    remove_charat1=word.replace(charat1 , "_");
    remove_charat2=remove_charat1.replace(charat2 , "_");
    remove_charat3=remove_charat2.replace(charat3 , "_");
    console.log(remove_charat3);

    question_word="<h4 id='word_display' >Q."+remove_charat3+"</h4>";
    input_box="<br>  answer: <input type='text' id='input_check_box'>" ;
    check_button="<br> <button id='check' onclick='check()' class='btn btn-muted'> Check </button>"
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if (answer == word)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn :"+player2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn :"+player1_name;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn :"+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn :"+player1_name;
    }
}

