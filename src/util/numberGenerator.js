export default function () {
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  const proposedAnswer =
    Math.floor(Math.random() * 3) + value1 + value2 + value3;

  return { value1, value2, value3, proposedAnswer };
}
