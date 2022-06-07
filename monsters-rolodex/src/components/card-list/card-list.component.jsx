import Card from '../card/card.component';

import './card-list.styles.css';

// 1. monsters is being destructed from the first param of the function, the "props" param
// same as: const { monsters } = props;

// 2. the function is implicity returning the JSX.
// same as: () => { return (<html>) }

const CardList = ({ monsters }) => (
  <div className="card-list">
    {
      monsters.map((monster) => {
        return (
          <Card
            monster={monster}
            key={monster.id}
          />
        )
      })
    }
  </div>
);

export default CardList;
