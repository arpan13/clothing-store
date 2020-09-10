import React from "react";
import "./styles.scss";
import CollectionItem from "../collection-item/collection-item";

export default function PreviewCollections({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem {...itemProps} key={id} />
          ))}
      </div>
    </div>
  );
}
