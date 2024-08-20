import { useState } from "react";
import styles from "./ListGroup.module.css"

// { items: [], heading: string }
interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //passing function via Props
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.container].join( ' ' )}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
