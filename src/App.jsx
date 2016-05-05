import React from 'react';
import { render } from 'react-dom';
import { SlideShow } from './Components/SlideShow';
import { LivePreview } from './Components/LivePreview';

render(
    <div>
        <SlideShow />
        <LivePreview />
    </div>,
    document.getElementById('content')
);
