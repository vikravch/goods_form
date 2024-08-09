export const colors = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
  { id: 3, name: "blue" },
  { id: 4, name: "yellow" },
];

export const getColorById = (colorId: number) => {
  return colors.find((color) => color.id === colorId);
};
