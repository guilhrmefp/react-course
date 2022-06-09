const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};


const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {className: 'title'}, ['React IS rendered.']),

    React.createElement(Person, {
      name: 'Yihua',
      occupation: 'Instructor',
    }, null),
    React.createElement(Person, {
      name: 'Andrei',
      occupation: 'Lead Instructor',
    }, null),
    React.createElement(Person, {
      name: 'Emily',
      occupation: 'Teacher',
    }, null),
  ]);
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
