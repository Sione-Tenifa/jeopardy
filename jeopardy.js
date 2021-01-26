// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

// /   /** Get NUM_CATEGORIES random category from API.
// *
// * Returns array of category ids
// */

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */


let categories = [];


async function getCategoryIds() {
    let res = await axios.get(`http://jservice.io/api/random?count=6`)
    let NUM_CATEGORIES = res.data.map(catId => ({
        id: catId.category.id
      }));
    getCategory(NUM_CATEGORIES)
    fillTable()
}


function getCategory(catId) {
        
        catId.map(catId =>  {

        getCatData(catId)
            async function getCatData(catId){
                let res = await axios.get(`http://jservice.io//api/category?id=${catId.id}`)
                const clueObj = {
                    title: res.data.title,
                    cluesArray: res.data.clues
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

function fillTable() {
    const $jeoTableHead = $("#table-header")
    const $jeoBody1 = $("#body1")
    const $jeoBody2 = $("#body2")
    const $jeoBody3 = $("#body3")
    const $jeoBody4 = $("#body4")
    const $jeoBody5 = $("#body5")

    for(let data of categories){
        console.log(data.title)

        console.log(data.cluesArray[0])
        let $item = $(
            `
            
             <th>${data.title}</th>
            
             `
        )

        
        let $body1 = $(
            `
            <td>${data.cluesArray[0].question}</td>
            
            `
        )
        let $body2 = $(
            `
            <td>${data.cluesArray[1].question}</td>
            
            `
        )
        let $body3 = $(
            `
            <td>${data.cluesArray[2].question}</td>
            
            `
        )
        let $body4 = $(
            `
            <td>${data.cluesArray[3].question}</td>
            
            `
        )
        let $body5 = $(
            `
            <td>${data.cluesArray[4].question}</td>
            
            `
        )
        $jeoTableHead.append($item)
        $jeoBody1.append($body1)
        $jeoBody2.append($body2)
        $jeoBody3.append($body3)
        $jeoBody4.append($body4)
        $jeoBody5.append($body5)
  



                        //  <td>${data.cluesArray[1].question}</td>
                //  <td>${data.cluesArray[2].question}</td>
                //  <td>${data.cluesArray[3].question}</td>
                //  <td>${data.cluesArray[4].question}</td>
        }
        // for (i = 0; i < 6; i++) {
        //     let $item = $(
        //         `
        //         <td>${data.cluesArray}
        //         `        
        //     )
        //     $jeoBody.append($item)
        //  }
    }
                
                
                                
            
        
    /** Handle clicking on a clue: show the question or answer.
     *
     * Uses .showing property on clue to determine what to show:
     * - if currently null, show question & set .showing to "question"
     * - if currently "question", show answer & set .showing to "answer"
     * - if currently "answer", ignore click
     * */
    
    function handleClick(evt) {
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
        
    }
    
    /** On click of start / restart button, set up game. */
    
    // TODO
    
    /** On page load, add event handler for clicking clues */
    
    // TODO
    
    // const cards = document.querySelectorAll('.card');
    // cards.forEach(function(card){
    //   const id = card.dataset.id // 1 or 2
     
    //   let otherCardId;
    //   if(id == 1){
    //     otherCardId = 2;
    //   } else if (id == 2) {
    //     otherCardId = 3;
    //   }
      
    //   if(id == 3) return;
     
    //   card.addEventListener('click', function(){
    //     card.style.display = 'none';
    //     document.querySelector('.card-' + otherCardId).style.display = 'block';
    //   });
    // })

             

            
       
