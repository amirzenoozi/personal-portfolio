import React, { useEffect } from 'react';
import { useStyle } from 'src/pages/not-found/not-found.style';
import { environment } from '../../../environments/environment.prod';

const NotFound: React.FC = () => {
  const classes = useStyle();
  const search = window.location.search;
  const params = new URLSearchParams(search);

  useEffect( () => {
    if ( !environment.production ) return;
    const FromQueryParam = ( params.get('from') !== undefined ) ? params.get('from') : 'Unknown_Route';
  }, []);

  return (
    <div className={classes.PageContainer}>
      <span title={'404'} className={classes.Wrapper}>
        404
      </span>
    </div>
  );
};

export default NotFound;
