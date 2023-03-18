import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppPage } from './pages/app';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <AppPage />
    </StrictMode>
);
