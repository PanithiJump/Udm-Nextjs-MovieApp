import React from 'react'

// functional component - arrow function
const About = () => {
    const message = 'Hi Kim Jumper'
    return(
        <h1>Yooo - {message}</h1>
    )
}

// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'I am genereting this with createElement')
// }

export default About
