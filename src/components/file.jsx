export default function File({ item, isChild = false }) {
  return (
    <p
      style={{
        background: 'lightgray',
        padding: '2px',
      }}
      className={isChild? 'child' : ''}
    >
      &#9781; {item.name}
    </p>
  );
}