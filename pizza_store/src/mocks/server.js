import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// configuring a mocking server with the below request handlers.
export const server = setupServer(...handlers);
