import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider, Link } from 'react-router-dom';
import { router } from './router.jsx';

import headerBg from './assets/utkimg.png'; // your image path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <h1
        className="text-orange-500 text-2xl font-bold p-6 text-center"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'contain', // ensures full image is shown
          backgroundRepeat: 'no-repeat', // don't tile the image
          backgroundPosition: '-20px center', // center the image
          color: 'white', // text color for visibility
          height: '100px', // adjust height as needed
        }}
      >
      </h1>

      <RouterProvider router={router} />
    </>
  </StrictMode>
);
