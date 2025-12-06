import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt = '', className = '' }) {
    const [errored, setErrored] = useState(false);
    const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23737474" font-size="20">Image</text></svg>';

    return (
        <img
            src={errored ? placeholder : src}
            alt={alt}
            className={className}
            onError={() => setErrored(true)}
        />
    );
}
