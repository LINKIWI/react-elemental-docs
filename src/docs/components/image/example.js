import React from 'react';
import { Image, Label, Spacing } from 'react-elemental';

const ImageExample = () => (
  <div>
    <Spacing bottom>
      <Label
        label="Eager standard image"
        sublabel="Loaded eagerly without displaying the intermediate state"
      />
      <Image
        alt="Eager standard image"
        src="https://res.cloudinary.com/demo/image/upload/fl_progressive/sample.jpg"
        color="#866e37"
        width="300px"
        height="250px"
        imgStyle={{ objectFit: 'cover' }}
      />
    </Spacing>

    <Spacing bottom>
      <Label
        label="Eager intermediate image"
        sublabel="Loaded eagerly with displaying the intermediate state"
      />
      <Image
        alt="Eager intermediate image"
        src="https://res.cloudinary.com/idemo/image/upload/fl_progressive/sofa_cat.jpg"
        color="#b49a83"
        width="300px"
        height="250px"
        imgStyle={{ objectFit: 'cover' }}
        showIntermediate
      />
    </Spacing>

    <Spacing bottom>
      <Label
        label="Lazy intermediate image"
        sublabel="Loaded lazily with displaying the intermediate state"
      />
      <Image
        alt="Lazy intermediate image"
        src="https://res.cloudinary.com/idemo/image/upload/fl_progressive/balloons.jpg"
        color="#7e8b8e"
        width="300px"
        height="250px"
        imgStyle={{ objectFit: 'cover' }}
        lazy
        showIntermediate
      />
    </Spacing>
  </div>
);

export default ImageExample;
