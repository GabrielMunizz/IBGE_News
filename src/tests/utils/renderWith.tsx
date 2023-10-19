import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContext, { NewsContextType } from '../../context/NewsContext';

export const renderWithContext = (
  ui: JSX.Element,
  { initialContext = {} as NewsContextType } = {},
) => {
  window.history.pushState({}, '');

  return {
    user: userEvent.setup(),
    ...render(
      <NewsContext.Provider value={ initialContext }>
        {ui}
        ,
      </NewsContext.Provider>,
    ),
  };
};
