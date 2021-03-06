import React from 'react';
import { shallow } from 'enzyme';
import ToDoItem from './ToDoItem';

function mockItem(params) {
    return params;
}

describe('<ToDoItem />', () => {
    it('renders the title', () => {
        const item = mockItem({ title: 'Title' });
        const wrapper = shallow(<ToDoItem item={item} />);
        expect(wrapper.text()).toContain(item.title);
    });

    it('renders a check mark when complete', () => {
        const item = mockItem({ complete: true });
        const wrapper = shallow(<ToDoItem item={item} />);
        expect(wrapper.find('.item-mark').text()).toEqual('✓');
    });

    it('renders a bullet when not complete', () => {
        const item = mockItem({ complete: false });
        const wrapper = shallow(<ToDoItem item={item} />);
        expect(wrapper.find('.item-mark').text()).toEqual('•');
    });
});