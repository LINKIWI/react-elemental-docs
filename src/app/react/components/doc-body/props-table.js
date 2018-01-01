import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';
import Heading from 'app/react/components/doc-body/heading';
import Markdown from 'app/react/components/markdown';

/**
 * Cell representing a table header.
 */
const CellHeader = ({ text }) => (
  <th style={{ fontWeight: 'normal' }}>
    <Spacing size="small" right bottom>
      <Text size="kilo" color="gray60" style={{ textAlign: 'left' }} uppercase bold>
        {text}
      </Text>
    </Spacing>
  </th>
);

CellHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

/**
 * Cell representing a regular data cell.
 */
const Cell = ({ children }) => (
  <td style={{ verticalAlign: 'top' }}>
    <Spacing size="small" right>
      {children}
    </Spacing>
  </td>
);

Cell.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Table documenting component props.
 */
const PropsTable = ({ props: componentProps }) => (
  <div>
    <Spacing size="small" bottom>
      <Heading text="Component props" hash="props" />
    </Spacing>

    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <CellHeader text="Prop" />
          <CellHeader text="Description" />
          <CellHeader text="Default" />
        </tr>
      </thead>
      <tbody>
        {componentProps.map(({ key, description, defaultValue }) => (
          <tr key={key}>
            <Cell>
              <Markdown source={key} />
            </Cell>
            <Cell>
              <Markdown source={description} />
            </Cell>
            <Cell>
              {defaultValue ? (
                <Markdown source={defaultValue} />
              ) : (
                <Text color="gray50" size="kilo">
                  (required)
                </Text>
              )}
            </Cell>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    // Markdown representing the name of the prop
    key: PropTypes.string.isRequired,
    // Markdown providing a description of the prop's value
    description: PropTypes.string.isRequired,
    // Optional markdown describing the default value assigned to the prop
    defaultValue: PropTypes.string,
  })).isRequired,
};

export default PropsTable;
