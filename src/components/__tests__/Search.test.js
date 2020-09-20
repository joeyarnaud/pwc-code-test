import React from 'react';
import { mount } from 'enzyme';
import Search from '../Search';
import { TestingWrapper } from '../../helpers/testing-helpers';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Search Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <Search
          label='Search'
          placeholder='search city'
          handleChange={() => null}
          value=''
          handleSubmit={() => null}
        />
      </TestingWrapper>
    );
  });

  it('Renders the label and input correctly', () => {
    expect(wrapped.find('input').props().placeholder).toEqual('search city');
    expect(wrapped.find('label').text()).toEqual('Search');
    expect(wrapped.find('input').props().value).toEqual('');
  });
});
