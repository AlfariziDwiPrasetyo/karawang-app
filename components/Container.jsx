const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1140px] w-full  px-6`}>{children}</div>
  );
};

export default Container;
