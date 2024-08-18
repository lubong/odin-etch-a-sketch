const sketchbox = document.querySelector("#sketchbox");

const GRID_LEN  = 16;

function createGrid(len){
    sketchbox.textContent = "";
    for (let i = 0; i < len; i++){
        const row = document.createElement('div');
        row.classList.add("row");
        for (let i = 0; i < len; i++){
            const col = document.createElement('div');
            col.classList.add("col");
            col.style.border = `${1.0/len}em solid rgb(0, 255, 195)`;
            row.appendChild(col);
        }
        sketchbox.appendChild(row);
    }
};
createGrid(GRID_LEN);

sketchbox.addEventListener("mouseover", (event)=>{
    const target = event.target;
    if (target.id === "sketchbox" || target.className === "row"){
        return;
    }
    target.style.background = "blue";
})

const alterGridBtn = document.querySelector("#alterGridBtn");
alterGridBtn.addEventListener("click", ()=>{
    let userLen;
    do {
        userLen = prompt("Enter Sketchbox size (max 100): ");
    } while (userLen > 100);
    createGrid(userLen);
})