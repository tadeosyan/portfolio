import { getStorageColor } from '../Themes/utils';
import AtomicSpinner from 'atomic-spinner';

export const Loader = () => {
  return (
    <div className="loaderContainer">
      <AtomicSpinner
        atomSize={150}
        electronPathColor={getStorageColor()}
      />
    </div>
  );
};
