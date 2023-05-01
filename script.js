const questionBtn = document.getElementsByClassName ("question");
console.log (questionBtn[0])
console.log (questionBtn[1])
console.log (questionBtn[2])

let i;
let btnLength = questionBtn.length

for (i=0; i<btnLength; i++) {
    questionBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelDivi = this.nextElementSibling;

    if (panelDivi.style.maxHeight) {
      panelDivi.style.maxHeight = null;
    }

    else {
      panelDivi.style.maxHeight = panelDivi.scrollHeight + "px";
    }
  });
}