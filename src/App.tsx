// import ListGroup from './components/ListGroup';

import LifeCycle from './components/LifeCycle';

// import DataBinding from './components/DataBinding';

const App: React.FC = () => {
  // type Item = {
  //   id: number;
  //   name: string;
  // };
  // const initialItems: Item[] = [
  //   { id: 1, name: 'Item 1' },
  //   { id: 2, name: 'Item 2' },
  //   { id: 3, name: 'Item 3' },
  // ];
  return (
    <div className="flex flex-col justify-center">
      {/* <ListGroup initialItems={initialItems} /> */}

      {/* <DataBinding /> */}

      <LifeCycle initialCount={10} />
    </div>
  );
};

export default App;
