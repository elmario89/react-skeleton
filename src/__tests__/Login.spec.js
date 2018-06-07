import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {Login} from '../containers/login/index';

// describe what we are testing
describe('Login Component', () => {
  const wrapper = shallow(<Login history={{}} account={{}} isLoading={false}/>);

  it('should render without throwing an error', () => {
    expect(wrapper.find('.login').exists()).toBe(true);
  });
  it('renders a email input', () => {
    expect(wrapper.find('[type="email"]').length).toEqual(1);
  });
  it('renders a password input', () => {
    expect(wrapper.find('[type="password"]').length).toEqual(1);
  });
  it('renders restore button', () => {
    expect(wrapper.find('.restore').length).toEqual(1);
  });
  it('should update view on clicking the button', function () {
    const wrapper = shallow(<Login history={{}} account={{}} isLoading={false}/>);

    wrapper.find('.restore').simulate('click');
    expect(wrapper.state('isRestore')).toEqual(true);

    expect(wrapper.find('.restoreForm').exists()).toBe(true);

    wrapper.find('.login').simulate('click');
    expect(wrapper.state('isRestore')).toEqual(false);

    expect(wrapper.find('.login').exists()).toBe(true);
  });
  it('should react to change fields events', function () {
    const wrapper = shallow(<Login history={{}} account={{}} isLoading={false}/>);

    wrapper.find('[type="email"]').simulate('change', {target: {value: 'owner@example.com'}});
    expect(wrapper.state('email')).toEqual('owner@example.com');

    wrapper.find('[type="password"]').simulate('change', {target: {value: '221221'}});
    expect(wrapper.state('password')).toEqual('221221');
  });
});