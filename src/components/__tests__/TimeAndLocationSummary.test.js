import React from 'react';
import { mount } from 'enzyme';
import TimeAndLocationSummary from '../TimeAndLocationSummary';
import { TestingWrapper } from '../../helpers/testing-helpers';
import moment from 'moment';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The TimeAndLocationSummary Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestingWrapper>
        <TimeAndLocationSummary timezone='Australia/Melbourne' />
      </TestingWrapper>
    );
  });

  it('Renders the text correctly', () => {
    expect(wrapped.find('h2').text()).toEqual('Australia/Melbourne');
    expect(wrapped.find('p').text()).toEqual(moment().format('dddd, MMMM Do'));
  });
});
