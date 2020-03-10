
import React from 'react';
import { render,mount,shallow } from 'enzyme';
import Page2 from '../../pages/Page2'


it('Displays the correct number of inputs based on previous input', () => { 
    
    
    const pleasant = 5
    const state ={pleasant}
    const componenttobepassed = {state}
 
  
    const wrapper = shallow(<Page2 location= {componenttobepassed} />);
    expect(wrapper.find('input').length).toEqual(5);

   
});


