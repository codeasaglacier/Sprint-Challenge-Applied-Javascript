// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get('https:/lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data.topics, '14')
        // console.log(createTab(response.data))
        response.data.topics.forEach(title => 
          createTab(title)  
        );
    })
    .catch(error => {
        console.error(error)
    })
    

    function createTab(tab) {

        const tabs = document.createElement('div')
        tabs.classList.add('tab')
        tabs.textContent = tab
        const work = document.querySelector('.topics')
        work.appendChild(tabs)
        console.log(tabs)

        return tabs
    }