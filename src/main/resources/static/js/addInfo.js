function nicknameDuplicateCheck(){
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{2,18}$/;
    const nickname=$("#memberNickname").val();
    const checkResult=document.getElementById("nicknameDuplicate");
    $.ajax({
        type:'post',
        url:"nicknameDuplicate",
        data:{"nickname" : nickname},
        success : function (result){
            if(result=="ok"){
                if(nickname.length==0){
                    checkResult.innerHTML="필수 입력값입니다.";
                    checkResult.style.color="red";
                }
                else if(nickname.match(exp)){
                    checkResult.innerHTML="GOOD";
                    checkResult.style.color="green"
                }
                else{
                    checkResult.innerHTML="유효하지 않은 형식입니다.";
                    checkResult.style.color="red"
                }
            }
            else{
                checkResult.style.color = 'red';
                checkResult.innerHTML='이미 사용중인 아이디입니다.';
            }
        },
        error : function (){
            console.log("닉네임체크 오류")
        }
    });
}

function pnCheck(){
    const exp = /^(?=.*\d)[\d]{11}$/;
    const phone = document.getElementById('memberPhone').value;
    const checkResult = document.getElementById('pnOut');

    if(phone.match(exp)){
        checkResult.innerHTML ="GOOD"
        checkResult.style.color="green";
    }
    else if(phone.length==0){
        checkResult.innerHTML="필수 입력값입니다.";
        checkResult.style.color="red";
    }
    else{
        checkResult.innerHTML="유효하지 않은 형식입니다"
        checkResult.style.color="red"
    }

}