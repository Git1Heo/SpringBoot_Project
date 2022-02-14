function mailCheck() {
    const mail = $("#memberCheckmail").val();
    if (mail.length==0){
        alert("인증번호를 받을 이메일을 입력하세요")
    }
    else {
        const checkResult=document.getElementById("mailCheckStatus");
        $.ajax({
            type: 'post',
            url: "sendMail",
            data: {"mail": mail},
            success: function (result) {
                checkResult.style.color = 'green';
                checkResult.innerHTML='인증코드 발송!!';
            },
            error: function () {
                checkResult.style.color = 'red';
                checkResult.innerHTML='코드 발송 실패 이메일을 확인해주세요';
            }
        });
    }
}

function codeCheck(){
    const code = $("#code").val();
    const checkResult=document.getElementById("codeCheckStatus");
    if (code.length==0){
        checkResult.style.color = 'red';
        checkResult.innerHTML='인증코드를 입력하세요';
    }
    else {
        $.ajax({
            type: 'post',
            url: "codeCheck",
            data: {"code": code},
            success: function (result) {
                if (result == "ok") {
                    checkResult.style.color = 'green';
                    $("#memberCheckmail").attr("readonly",true);
                    checkResult.innerHTML = '인증코드 일치';
                } else {
                    checkResult.style.color = 'red';
                    checkResult.innerHTML = '인증코드 불일치';
                }
            },
            error: function () {
                console.log("코드확인 오류발생")
            }
        });
    }
}

function mailDuplicateCheck(){
    const mail=$("#memberEmail").val();
    const checkResult=document.getElementById("mailDuplicate");
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d-_]{5,20}$/;
    $.ajax({
        type:'post',
        url:"mailDuplicate",
        data:{"mail" : mail},
        success : function (result){
            if(result=="ok"){
                if(mail.length==0){
                    checkResult.innerHTML="필수 입력값입니다.";
                    checkResult.style.color="red";
                }
                else if(mail.match(exp)){
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

        }
    });
}

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
                checkResult.innerHTML='이미 사용중인 닉네임입니다.';
            }
        },
        error : function (){
            console.log("닉네임체크 오류")
        }
    });
}

function pw1check(){
    const pw1ch=document.getElementById("memberPw").value;
    const checkResult=document.getElementById("pw1out");

    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;

    if(pw1ch.length==0){
        checkResult.innerHTML="필수 입력값입니다.";
        checkResult.style.color="red";
    }
    else if (pw1ch.match(exp)){
        checkResult.innerHTML="GOOD";
        checkResult.style.color="green"
    }
    else{
        checkResult.innerHTML="8~16자 영문 대 소문자, 숫자로 입력하세요";
        checkResult.style.color="red";
    }
}

function pw2check(){
    const pw1ch=document.getElementById("memberPw").value;
    const pw2ch=document.getElementById("memberPwCheck").value;
    const checkResult=document.getElementById("pw2out");
    if (pw2ch.length==0){
        checkResult.innerHTML="필수 입력값입니다.";
        checkResult.style.color="red";
    }
    else {
        if (pw1ch == pw2ch) {
            checkResult.innerHTML = "GOOD";
            checkResult.style.color = "green";
        } else {
            checkResult.innerHTML = "비밀번호가 일치하지않습니다.";
            checkResult.style.color = "red";
        }
    }
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