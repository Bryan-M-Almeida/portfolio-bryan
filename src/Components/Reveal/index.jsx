import useReveal from "../../hooks/useReveal";

const Reveal = ({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...props
}) => {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
