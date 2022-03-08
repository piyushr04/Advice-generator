window.onload = () => {
    var content = document.getElementById("advice");
    var btn = document.getElementById("dice");
    var no=document.getElementById("adviceno");



    function getadvice() {

        fetch('https://api.adviceslip.com/advice').then(Response => {
            console.log(Promise)
            return Response.json();
           
        }).then(adviceData => {
            console.log(adviceData)
            const adviceObj = adviceData.slip;
            content.innerHTML = `${adviceObj.advice}`
            no.innerHTML = `ADVICE #${adviceObj.id}`
            console.log(adviceObj.advice)
        }).catch(error => {
            console.log(error);
        })
    };

    btn.onclick = () => {
        getadvice();
    }

}