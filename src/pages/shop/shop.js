import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollections from "../../components/preview-collection/preview-collections";

export default function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <PreviewCollections
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
}
