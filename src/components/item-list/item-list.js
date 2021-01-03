import React from 'react';
import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.slice(0,3).map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });


ItemList.defaultProps = {
onItemSelected: () => {}
}

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;
