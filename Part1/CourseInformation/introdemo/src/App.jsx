const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
    // define function to output Parts components
    outputParts: function() {
      return this.parts.map(part => <Part key={part.name} part={part} />)
    },
    //define function to calculate total exercises without using reduce
    totalExercises: function() {
      let total = 0;
      this.parts.forEach(part => {
        total += part.exercises;
      });
      return total;
    }
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.outputParts()}
    </div>
  )
}

const Footer = (props) => {
  return <p>Number of exercises {props.course.totalExercises()}</p>
}
export default App