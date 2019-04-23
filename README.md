# General Assembly WDI Project 3: A MERN Stack App

[Portfolio Link](https://munch-ga.herokuapp.com/)

## Brief

In groups of 4, build a full-stack application by making your own backend and your own front-end. Use an Express API to serve your data from a Mongo database and consume your API with a separate front-end built with React.

## Technologies Used:

* JavaScript
* React
* HTML
* CSS
* Sass
* Node.js
* Mongoose
* Express
* Axios
* Filestack
* Yarn
* Bulma

## Approach Taken

In our team of 4 we created Munch, a social networking site for foodies, bringing together restaurant reviews and recipes all in one place. My part in the project included building the models in Node.js, building the friend request and pinned items functionality, implementing search, creating the initial seeds file and styling icons and buttons.

---

## Screenshot Walk-through

### Landing page for logged-out users prompting register/login.

![landing page](screenshots/landing-page.png)

### Register page that allows user to register their details.

![register](screenshots/register.png)

### Login page allows user to login.

![login](screenshots/login.png)

### The user's homescreen is a newsfeed which curates content specific to the user's category preferences and friends list.

![newsfeed](screenshots/newsfeed.png)

### The recipe page displays all the relevant info for the recipe, including the ability to pin the recipe, like the recipe, make a comment, and edit/delete if the user is the recipe owner.

![recipe page](screenshots/recipe-page.png)

### The review page displays all the relevant info for the review, including the ability to pin the review, like the review, make a comment, and edit/delete if the user is the review owner.

![review page](screenshots/review-page.png)

### The Profile page allows the user to browse their own details, find their recipes and reviews, see their friend list, and the option to edit their details.

![profile page](screenshots/profile-page.png)

### Search allows the user to search the whole database for restaurants, recipes, ingredients and categories.

![search](screenshots/search.png)

### The Pinned Items page allows users to see their pinned items all in one place.

![pinned items](screenshots/pinned-items.png)

### The new review/recipe forms allow the user to create their own reviews and recipes.

![new review](screenshots/new-review.png)

___

### Functionality

The functionality works much the same way as most popular social network sites. Users can:

* Register & login
* Post, edit and delete your own reviews and recipe
* Search posts
* Like other’s posts
* Friend other users
* Get a curated newsfeed based on your preferences and friends
* Pin your favourite reviews & recipes

### Process
When we realised there were very few apps that incorporated both restaurant reviews and recipes (apps tend to lean to one or the other), we realised we had our USP. Once we had settled on our concept, we got to work on the  
1.
1.
1.
1.
1.
1.


#### Featured piece of code 1

The below code demonstrates the lengths we had to navigate NYT Archive API's metadata. Depending on the year the user had selected there would be a different way to filter for tech article due to the nature of the inconsistent metadata. To allow for this we had to allow for every eventuality in successfully retrieving the right results.

``` JavaScript
handleSubmit(e) {
  {this.state.data.year && this.state.data.month &&
  this.setState({ loading: 'true' })
  e.preventDefault()
  console.log(this.state.data.year, this.state.data.month, key)
  axios.get(`https://api.nytimes.com/svc/archive/v1/${this.state.data.year}/${this.state.data.month}.json?api-key=${key}`)
    .then(res => {
      const stories = res.data.response.docs.filter(story => story.keywords.find(item => {
        return (item.value.includes('Technology') || item.value.includes('TECHNOLOGY'))
      }) || (story.section_name !== null && story.section_name.includes('Technology')))
      this.setState({ stories, loading: 'false' })
    })
    .catch(err => console.log(err))
    .catch(err => this.setState({ errors: err.response.data.errors }))
  console.log(this.state)
  }
}
```

### Styling

We decided to keep the styling quite minimal to allow the user interface to be as clear and intuitive as possible. By using some classical imagery and colour schemes it has a very timeless look. Adding the background imagery of the clock lends itself the idea or time travel, but also the invent of technology.

#### Featured piece of code 2

The below demonstrates the use of ES6's spreading function to change state without mutating it when the user chooses a month and year. It also allows for any errors to be added to state.

``` JavaScript
  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

```
___

### Challenges

Whilst the NYT Archive has a very impressive volume of articles within its API, it also has very little documentation. This limitation meant we had to become more creative with our problem solving ability to handle it's enormous metadata (with some glaring inconsistencies).

With the time constraint, we also had to streamline our way of working to allow for the best possible output in the time given. This meant focusing on the key MVP elements of the app, rather than focusing on superfluous features.

### Wins

Creating our app strengthened our knowledge of React and also gave us an opportunity to experiment and play around with ideas. Our top wins include:

* The fluid style of our site/app being highly customized through the use of common tools like Bulma.
* Displaying results in a easily digestible manner.
* Generating a loading page whilst the API retrieves the story data
* Creating a “Randomizer” function
___

## Future Features

If we had more time during Reactathon, essential future features we would like to add include:

* A 'No Results' message when the search doesn't return anything.
* Creating social sharing buttons to give users an opportunity to interact better with the site. Also, adding images to results for both older and more recent stories (instead of just headlines).
* Establishing more CSS animation and functionality on all pages.
* Adding more information and instructions (either on pages or through a pop-up window) about the app and our intent.
