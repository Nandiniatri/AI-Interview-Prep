const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder = '',
    className = '',
    accept,
    id = '',
    style
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            accept={accept}
            id={id}
            style={style}
        />
    );
};

export default Input;
