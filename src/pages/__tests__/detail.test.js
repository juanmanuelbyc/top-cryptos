import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../../components/Detail';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';

const TestDetail = () => {
 const history = createMemoryHistory();
 return (
     <Router location={history.location} navigator={history}>
       <Detail title={'Price'} value={'99999'} />
     </Router>
 );
};

it('renders correctly', () => {
  const tree = renderer.create(
    <TestDetail />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
