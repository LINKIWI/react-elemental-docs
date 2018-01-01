import React from 'react';
import { Button, Label, Spacing, TextField } from 'react-elemental';

const LabelExample = () => (
  <div>
    <Spacing bottom>
      <Label label="Here's a TextField" />
      <TextField />
    </Spacing>

    <Spacing bottom>
      <Label
        label="Here's a submit button"
        sublabel="But clicking it will do nothing."
      />
      <Button text="Submit" />
    </Spacing>
  </div>
);

export default LabelExample;
