



let categories = [];
const numCat = 6;
const numClues = 5;


// function cluesEvent(){
//     const clues = document.querySelectorAll('.clue');
//     clues.forEach(function(card){
//         const id = card.dataset.id // 1 or 2
//         console.log("for loop")
//         let otherCardId;
//         if(id == 1){
//           otherCardId = 2;
//         } else if (id == 2) {
//           otherCardId = 3;
//         }
        
//         if(id == 3) return;
       
//         card.addEventListener('click', function(){
//           console.log("event")
//           card.style.display = 'none';
//           document.querySelector('.clue-' + otherCardId).style.display = 'block';
//         });
//       })
// }



async function getCategoryIds() {
    console.log("clickd")
    let res = await axios.get(`http://jservice.io/api/random?count=6`)
    let catIds = res.data.map(catId => ({
        id: catId.category.id
      }));
    getCategory(catIds)
    
}


async function getCategory(catId) {
        
        await catId.map(catId =>  {

        getCatData(catId)
            async function getCatData(catId){
                let res = await axios.get(`http://jservice.io//api/category?id=${catId.id}`)
                const clueObj = {
                    title: res.data.title,
                    cluesArray: res.data.clues,
                    showing: null,
                }
                categories.push(clueObj)
            }   
        })
        fillTable()
}
            


async function fillTable() {
     $("#board thead").empty();

    let $tr = $("<tr>");
    for (let catId = 0; catId < numCat; catId++) {
      console.log(catId)
      console.log(categories[catId].title)
      $tr.append($("<th>").text(categories[catId].title));
    }
    $("#board thead").append($tr);
  
    $("#board tbody").empty();
    for (let clueId = 0; clueId < numClues; clueId++) {
      let $tr = $("<tr>");

      for (let catId = 0; catId < numCat; catId++) {
        $tr.append($("<td>").attr("id", `${catId}-${clueId}`).text("?"));
      }
      $("#board tbody").append($tr);
    }
 
}
                

    
    function handleClick(evt) {
       console.log("clue Clicked")

    //     const clues = document.querySelectorAll('.clue');
    //     clues.forEach(function(card){
    //         const id = card.dataset.id // 1 or 2
    //         console.log(id)
    //         console.log(card)
    //         let otherCardId;

    //         if(id == 1){
    //         otherCardId = 2;

    //         } else if (id == 2) {
    //         otherCardId = 3;
    //         }
            
    //         if(id == 3) return;
        
    //         card.addEventListener('click', function(){
    //             console.log("event")
    //             card.style.display = 'none';
    //             document.querySelector('.clue-' + otherCardId).style.display = 'block';
    //         });
    //    })

    let id = evt.target.id;
    let [catId, clueId] = id.split("-");
    let clue = categories[catId].cluesArray[clueId];
  
    let msg;
  
    if (!clue.showing) {
      msg = clue.question;
      clue.showing = "question";
    } else if (clue.showing === "question") {
      msg = clue.answer;
      clue.showing = "answer";
    } else {
      return
    }
  
    
    $(`#${catId}-${clueId}`).html(msg);
   
    }
    

    
    async function setupAndStart() {
        await getCategoryIds()
        categories = [];


        
        // cluesEvent()
    }


    $("#restart").on("click", setupAndStart);
    

    $(async function () {
        setupAndStart();
        $("#board").on("click", "td", handleClick);
      }
    );
    


             

            
    
