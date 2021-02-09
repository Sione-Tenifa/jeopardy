



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
}
            

        
        

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    $("#board thead").empty();

    let $tr = $("<tr>");
    for (let catId = 0; catId < numCat; catId++) {
      console.log(catId)
      console.log(categories[catId].title)
      $tr.append($("<th>").text(categories[catId].title));
    }
    $("#jeopardy thead").append($tr);
  
    // Add rows with questions for each category
    $("#jeopardy tbody").empty();
    for (let clueId = 0; clueId < numClues; clueId++) {
      let $tr = $("<tr>");

      for (let catId = 0; catId < numCat; catId++) {
        $tr.append($("<td>").attr("id", `${catId}-${clueId}`).text("?"));
      }
      $("#jeopardy tbody").append($tr);
    }
 
}
                
                                
            
        
    /** Handle clicking on a clue: show the question or answer.
     *
     * Uses .showing property on clue to determine what to show:
     * - if currently null, show question & set .showing to "question"
     * - if currently "question", show answer & set .showing to "answer"
     * - if currently "answer", ignore click
     * */
    
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
   
    }
    
    /** Wipe the current Jeopardy board, show the loading spinner,
     * and update the button used to fetch data.
     */
    
    function showLoadingView() {
    
    }
    
    /** Remove the loading spinner and update the button used to fetch data. */
    
    function hideLoadingView() {
    }
    
    /** Start game:
     *
     * - get random category Ids
     * - get data for each category
     * - create HTML table
     * */
    
    async function setupAndStart() {
        await getCategoryIds()
        categories = [];


        fillTable()
        // cluesEvent()
    }

    /** On click of start / restart button, set up game. */
    
    // TODO
    $("#restart").on("click", setupAndStart);
    
    /** On page load, add event handler for clicking clues */
    
    // TODO
    $(async function () {
        setupAndStart();
        $("#jeopardy").on("click", "td", handleClick);
      }
    );
    


             

            
    
