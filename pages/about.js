import React from 'react'

// functional component - arrow function
// WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentional components , patialy right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hi Kim Jumper'
//     return(
//         <h1>Yooo - {message}</h1>
//     )
// }

// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'I am genereting this with createElement')
// }


class About extends React.Component {
    render() {
      return (
        <h1>Hello I am class component MAN</h1>
      )
    }
  }

export default About
