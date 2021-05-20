// make event listener for client buttons 
console.log("styleworking")

const redirectEtb = () => {
    console.log("etbworking")
}
const redirectMrf = () => {
    console.log("mrfworking")
}
const redirectP2 = () => {
    console.log("P1working")
}
const redirectP1 = () => {
    console.log("P2working")
}
const redirectP3 = () => {
    console.log("P3working")
}








document.getElementById("etblink").addEventListener("click", redirectEtb)
document.getElementById("mrflink").addEventListener("click", redirectMrf)
document.getElementById("project3").addEventListener("click", redirectP1)
document.getElementById("project2").addEventListener("click", redirectP2)
document.getElementById("project1").addEventListener("click", redirectP3)
