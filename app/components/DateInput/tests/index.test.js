import React from 'react';
import { shallow } from 'enzyme';
import DateInput from '../DateInput';

describe('DateInput', () => {
  it('returns a valid unix timestamp on change', () => {
    const onChange = jest.fn();
    const startDate = new Date('2012-01-01').getTime();
    const endDate = '2012-05-05';
    const expectedDate = new Date(endDate).getTime();
    const fieldName = 'updated';
    const wrapper = shallow(
      <DateInput
        date={startDate}
        fieldName={fieldName}
        handleChangeField={onChange}
      />);
    wrapper.find('#date-input').simulate('change', { target: { value: endDate } });
    expect(onChange).toBeCalledWith(fieldName, expectedDate);
  });
});
