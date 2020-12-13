import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
  // First Test
  it('renders', () => {
    render(<About />);
  });


  // Second Test
  // The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function.
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
// When changes are made to a component's element, such as a change in text content, button label, or attribute, it will cause the stored snapshot to become stale. A new snapshot can be written at the command line that contains the instance of the test runner by typing u to update, or rewrite, a new snapshot.
  }
)
})

