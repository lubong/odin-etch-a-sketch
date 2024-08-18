const sketchbox = document.querySelector("#sketchbox");

const GRID_LEN  = 16;

(()=>{
    for (let i = 0; i < GRID_LEN; i++){
        const row = document.createElement('div');
        row.classList.add("row");
        for (let i = 0; i < GRID_LEN; i++){
            const col = document.createElement('div');
            col.classList.add("col");
            row.appendChild(col);
        }
        sketchbox.appendChild(row);
    }
})();

sketchbox.addEventListener("mouseover", (event)=>{
    const target = event.target;
    if (target.id === "sketchbox" || target.className === "row"){
        return;
    }
    target.style.background = "blue";
})
