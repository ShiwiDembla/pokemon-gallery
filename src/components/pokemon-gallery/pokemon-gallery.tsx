import React from "react";
import "./pokemon-gallery.css";
import { FixedSizeGrid as Grid } from "react-window";
const data = Array.from({ length: 250 }, (_, index) => `Item ${index + 1}`);

const COLUMN_COUNT = 5;
const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 250;

const ProductCard = ({ columnIndex, rowIndex, style }: any) => {
  const productIndex = rowIndex * COLUMN_COUNT + columnIndex;
  if (productIndex >= data.length) return null;

  const product = data[productIndex];
  console.log("product", product);

  return (
    <div
      style={{
        ...style,
        border: "10px solid gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 10,
          textAlign: "center",
          background: "#fff",
        }}
        className="img">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${
            productIndex + 1
          }.png`}
          height={120}
          width={120}
        />
      </div>
    </div>
  );
};
const VirtualizedListExample = () => {
  const rowCount = Math.ceil(data.length / COLUMN_COUNT);
  return (
    <Grid
      columnCount={COLUMN_COUNT}
      columnWidth={ITEM_WIDTH}
      height={770}
      rowCount={rowCount}
      rowHeight={ITEM_HEIGHT}
      width={1600}>
      {ProductCard}
    </Grid>
  );
};

export default VirtualizedListExample;
