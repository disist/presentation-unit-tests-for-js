import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';

function mockItem(params) {
    return params;
}

describe('<ToDoList />', () => {
    it('renders the entire list of items', () => {
        const items = [mockItem({ id: 1 }), mockItem({ id: 2 }) /*, ... */];
        const wrapper = shallow(<ToDoList items={items} />);
        expect(wrapper.find(ToDoItem)).toHaveLength(items.length);
    });
});