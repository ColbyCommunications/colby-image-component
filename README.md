# colby-image-component

An image wrapper component that adds extra functionality to images, like lazy loading and lightbox

## Props

| Name            | Description                                                                   | Type   | Default Value |
| --------------- | ----------------------------------------------------------------------------- | ------ | ------------- |
| src             | An object of source information, like main, and thumbnail (not supported yet) | object | \*isRequired  |
| altText         | The alt text for the image                                                    | string | \*isRequired  |
| useLightbox     | Whether to use a lightbox or not                                              | bool   | true          |
| lightboxGallery | The id of the gallery                                                         | string | ''            |
| lightboxSrc     | The image source for the lightbox                                             | string | ''            |
| lazyLoad        | Whether to lazy load the image or not                                         | bool   | false         |

## Usage

### Single Image

```javascript
import React from 'react';
import Image from '@colbycommunications/colby-image-component';

export default () => (
    <div>
        <Image
            src={{ main: '/path/to/some/image' }}
            altText="The quick fox jumped over the lazy dog"
            useLightbox={false}
        />
    </div>
);
```

### With Lightbox

```javascript
import React from 'react';
import Image from '@colbycommunications/colby-image-component';

export default () => (
    <div>
        <Image
            src={{ main: '/path/to/some/image' }}
            altText="The quick fox jumped over the lazy dog"
            lightboxSrc="/path/to/perhaps/a/larger/image"
        />
    </div>
);
```

### Lightbox Gallery

```javascript
import React from 'react';
import Image from '@colbycommunications/colby-image-component';

export default () => (
    <div>
        <Image
            src={{ main: '/path/to/some/image' }}
            altText="The quick fox jumped over the lazy dog"
            lightboxSrc="/path/to/perhaps/a/larger/image"
            lightboxGallery="gallery1"
        />
        <Image
            src={{ main: '/path/to/some/image2' }}
            altText="The quick fox jumped over the lazy dog ..again"
            lightboxSrc="/path/to/perhaps/a/larger/image2"
            lightboxGallery="gallery1"
        />
    </div>
);
```
