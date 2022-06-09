const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {
      key: Math.random(),
    }, props.name),
    React.createElement('p', {
      key: Math.random(),
    }, props.occupation),
  ]);
};


const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {
      className: 'title',
      key: Math.random(),
    }, ['React IS rendered.']),

    React.createElement(Person, {
      name: 'Yihua',
      occupation: 'Instructor',
      key: Math.random(),
    }, null),
    React.createElement(Person, {
      name: 'Andrei',
      occupation: 'Lead Instructor',
      key: Math.random(),
    }, null),
    React.createElement(Person, {
      name: 'Emily',
      occupation: 'Teacher',
      key: Math.random(),
    }, null),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
