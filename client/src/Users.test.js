import Users from './components/Users';
import App from './App';
import * as rtl from '@testing-library/react';
import { render } from "@testing-library/react";

afterEach(rtl.cleanup);

test('User renders without crashing', ()=> {
const wrapper = render(<Users/>)
wrapper.debug()
})

test('App renders without crashing', ()=> {
    const wrapper = render(<App/>)
    wrapper.debug()
    })
