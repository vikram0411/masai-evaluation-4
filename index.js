// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun)
var matchesarr=JSON.parse( localStorage.getItem("schedule")) || []

function myfun(){
    event.preventDefault()
    var matchesobj={
        matchnumber:masaiForm.matchNum.value,
        teamAname:masaiForm.teamA.value,
        teamBname:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }
    matchesarr.push(matchesobj)
    // console.log(matchesarr)  
    // console.log(git)
    localStorage.setItem("schedule",JSON.stringify(matchesarr))
    window.location.href="matches.html"
}