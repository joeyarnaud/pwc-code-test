import React from 'react';
import { mount } from 'enzyme';
import Options from '../Options';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Options Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <Options />
      </TestingWrapper>
    );
  });

  it('Renders the searchbar and button', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('responds to the button being pressed', () => {
    expect(wrapped.find('button').text()).toEqual('Convert To Fahrenheit');
    wrapped.find('button').simulate('click');
    wrapped.update();
    expect(wrapped.find('button').text()).toEqual('Convert To Celcius');
  });

  it('responds to a change in input', () => {
    expect(wrapped.find('input').props().value).toEqual('');
    wrapped.find('input').simulate('change', { target: { value: 'Sydney' } });
    wrapped.update();
    expect(wrapped.find('input').props().value).toEqual('Sydney');
  });
});
