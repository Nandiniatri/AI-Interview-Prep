const Button = ({ children, onClick, type = 'button', className = '', disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}>
            {children}
        </button> 
    );
};
 
export default Button;
  