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
      return this.parts.map(({name, exercises}) => <Part key={name} name={name} exercises={exercises} />)
    },
    //define function to calculate total exercises without using reduce
    totalExercises: function() {
      let total = 0;
      this.parts.forEach(({exercises}) => {
        total += exercises;
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

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.outputParts()}
    </div>
  )
}

const Footer = ({course}) => {
  return <p>Number of exercises {course.totalExercises()}</p>
}
export default App