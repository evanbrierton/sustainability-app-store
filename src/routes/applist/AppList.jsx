import React from 'react';
import {
  arrayOf, shape, string, func,
} from 'prop-types';
import { Appcard } from '../../components';

const AppList = ({ apps, updateRating }) => (
  <section>
    {apps.sort((a, b) => (a.name < b.name ? -1 : 1)).map((app) => (
      <Appcard
        app={app}
        size="large"
        key={app.id}
        updateRating={updateRating}
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
  updateRating: func.isRequired,
};

export default AppList;
