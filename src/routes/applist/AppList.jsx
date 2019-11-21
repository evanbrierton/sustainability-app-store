import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Appcard } from '../../components';

const AppList = ({ apps }) => (
  <section>
    {apps.map(({
      id, name, description, image, link,
    }) => (
      <Appcard
        app={{
          name, description, image, link,
        }}
        size="large"
        key={id}
      />
    ))}
  </section>
);

AppList.propTypes = {
  apps: arrayOf(
    shape({
      id: string, name: string, description: string, img: string, link: string,
    }),
  ).isRequired,
};

export default AppList;
