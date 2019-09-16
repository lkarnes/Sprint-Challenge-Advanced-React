import Users from './components/Users';
import * as rtl from '@testing-library/react';
import { render } from "@testing-library/react";
import 'jest-dom/extend-expect';

afterEach(rtl.cleanup);

test('User renders without crashing', ()=> {
render(<Users/>)
})
