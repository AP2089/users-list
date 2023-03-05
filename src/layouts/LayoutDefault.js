const LayoutDefault = ({ children }) => {
  return (
    <div className="wrap">
      <div className="middle">
        <div className='center'>
          { children }
        </div>
      </div>
    </div>
  );
}

export default LayoutDefault;