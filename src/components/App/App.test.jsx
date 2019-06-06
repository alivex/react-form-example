import  App from './App';
import Loader from '../Loader';
import { Form } from 'reactstrap';
import { FormInterface } from '../FormInterface';
import FormInput from '../FormInput';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import AppState from '../../store/AppState';

const mockStore = configureMockStore();
const store = mockStore(AppState);

    it("renders form component", () => {
      const wrapper = render(
        <Form className="form" onSubmit={() => {}} />
      );
      expect(wrapper).toMatchSnapshot();
    });
    
    it("Loader opens correctly when form is disabled", () => {
      const wrapper = mount(
        <Loader open={true} />
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should call submitForm on form submission', () => {
        const submitSpy = sinon.spy();
        const wrapper = mount(
          <Form className="form" onSubmit={ submitSpy } />
        );
        wrapper
          .simulate("submit");
      expect(submitSpy.calledOnce).toBe(true);
      
    });
    
    describe('Form Component', () => {
      
      const mockSubmitfn = jest.fn();
      let wrapper;
      
     
      beforeEach(() => {

        wrapper = mount(
          <Provider store={store}>
            <App onSubmit={ mockSubmitfn } />
          </Provider>
        );

      })

      it('should be called with the name, email, and message in the state as arguments', () => {
        
        const input = wrapper.find('.form-control');
        
         // fill in name field with Andrew Jacksson
          input.at(0).simulate(
           'change', 
           {target: 
             {name: 'nameInp', value: 'Andrew Jacksson'}
           }
         )
        

         // fill in email field with andrew@jack.sson  
          input.at(1).simulate(
           'change', 
           {target: 
              {name: 'emailInp', value: 'andrew@jack.sson'}
           }
         )
         
         // fill in message field with My message is Hello  
          input.at(2).simulate(
           'change', 
           {target: 
              {name: 'messageInp', value: 'My message is Hello'}
           }
         )

         // simulate form submission   
         wrapper.simulate(
           'submit', 
           {preventDefault() {}}
         )
          
         // test to see store state has been updated
         const state = store.getState('fields');
         
         expect(state['fields']).toEqual(
           {messageInp: 'My message is Hello', emailInp: 'andrew@jack.sson', nameInp: 'Andrew Jacksson'}
         )
      })
    });
    