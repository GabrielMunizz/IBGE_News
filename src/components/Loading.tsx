import { ThreeDots } from 'react-loader-spinner';

function Loading() {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={ {} }
        visible
      />
    </div>
  );
}

export default Loading;
