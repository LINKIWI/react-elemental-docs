import React from 'react';
import PropTypes from 'prop-types';
import { colors, sizes, Spacing, Text } from 'react-elemental';
import KeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import Link, { LOCAL_PREFIX } from 'app/react/components/ui/link';

/**
 * Horizontal list of links to denote the current navigation hierarchy.
 */
const Breadcrumbs = ({ links }) => (
  <div>
    {links.map(({ text, href }, idx) => (
      <span key={text}>
        <Spacing size="tiny" right inline>
          <Text size="lambda" color="primary" uppercase bold inline>
            <Link
              href={`${LOCAL_PREFIX}${href}`}
              type="plain"
              activeColor="black"
            >
              {text}
            </Link>
          </Text>
        </Spacing>

        {idx < links.length - 1 && (
          <Spacing size="tiny" right inline>
            <KeyboardArrowRight
              style={{ color: colors.primary, fontSize: sizes.kilo }}
            />
          </Spacing>
        )}
      </span>
    ))}
  </div>
);

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default Breadcrumbs;
