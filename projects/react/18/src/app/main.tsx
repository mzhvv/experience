import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Button } from '@packages/ui/components/ui/button';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Button>a</Button>
    </div>
  </StrictMode>
);
