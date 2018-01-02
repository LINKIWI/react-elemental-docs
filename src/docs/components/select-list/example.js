import React from 'react';
import { Label, SelectList, Spacing } from 'react-elemental';

const SelectListExample = () => (
  <div>
    <Spacing bottom>
      <Label
        label="Label"
        sublabel="Select an item from the dropdown"
      />
      <SelectList
        placeholder="Placeholder"
        width={200}
        options={[
          { label: 'Some obnoxiously long label name', value: 'first-item' },
          { label: 'Second item', value: 'second-item' },
          { label: 'Third item', value: 'third-item' },
        ]}
      />
    </Spacing>

    <Spacing bottom>
      <Label label="Scrollbar when there are a lot of options" />
      <SelectList
        width={200}
        height={300}
        options={[
          { label: 'Some obnoxiously long label name', value: 'first-item' },
          { label: 'Second item', value: 'second-item' },
          { label: 'Third item', value: 'third-item' },
          { label: 'Wow', value: 'wow' },
          { label: 'so', value: 'so' },
          { label: 'many', value: 'many' },
          { label: 'options', value: 'options' },
          { label: 'to', value: 'to' },
          { label: 'choose', value: 'choose' },
          { label: 'from', value: 'from' },
          { label: 'in', value: 'in' },
          { label: 'this', value: 'this' },
          { label: 'dropdown', value: 'dropdown' },
        ]}
      />
    </Spacing>

    <Spacing bottom>
      <Label
        label="Oops"
        sublabel="You, as the end user, unsurprisingly supplied bad input"
      />
      <SelectList
        placeholder="Placeholder"
        width={200}
        options={[
          { label: 'Some obnoxiously long label name', value: 'first-item' },
          { label: 'Second item', value: 'second-item' },
          { label: 'Third item', value: 'third-item' },
        ]}
        error="That's a bad selection."
      />
    </Spacing>
  </div>
);

export default SelectListExample;
