import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../src/App.scss';
import { rootReducer } from '../src/modules';

const store = createStore(rootReducer);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <Provider store={store}>
        <Story />
      </Provider>
    </>
  ),
];
