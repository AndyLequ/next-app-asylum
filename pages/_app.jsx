
export const App = ({Component, pageProps}) => {
  return (
    <div className='font-serif w-[100vw] h-[100vh] m-0 flex-c justify-between align-centre text-center min-h-screen secondary-c'>
      <Component {...pageProps} />
    </div>
  );
};
