const LineLoadingIndicator = ({ loading, theme }) => {
  return loading ? (
    <div 
    className="loading-indicator" 
    style={{
        backgroundColor: theme.textColor,
    }}
>
    <div 
        style={{
            position: 'absolute',
            height: '100%',
            width: '50%',
            background: `linear-gradient(90deg, transparent, ${theme.headerColor}, transparent)`,
            animation: 'pulseMove 1s linear infinite, pulseWidth 1.5s linear infinite',
           // Glow effect sourced from the theme
        }}
    ></div>
</div>
  ) : (
    <div></div>
  );
};

export default LineLoadingIndicator;
