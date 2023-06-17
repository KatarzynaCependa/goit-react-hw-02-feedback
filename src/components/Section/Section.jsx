// import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
