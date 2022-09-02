// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



const url = 'https://lambda-times-backend.herokuapp.com/topics'

axios(url)
.then(res => {
    const topics = res.data.topics
        topics.forEach(element => {
        document.querySelector('div.topics').appendChild(createTopics(element))
    });
})

function createTopics(data) {
    const newArr = data

    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = newArr

    return topic
}
