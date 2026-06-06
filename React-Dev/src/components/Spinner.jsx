import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
    };
  return (
    <ClipLoader
      size={150}
      color="#123"
      loading={true}
      cssOverride={override}
    />
  );
};

export default Spinner;