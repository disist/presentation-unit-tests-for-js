import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
enzyme.configure({ adapter: new ReactSixteenAdapter() });