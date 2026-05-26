// const heading = React.createElement("h1", {id:"heading"}, "Hello Everyone!!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading1 = React.createElement("h1", {}, "heading-1");
// const heading2 = React.createElement("h2", {}, "heading-2");
//
// const one1 = React.createElement("div", { id: "parent" }, [heading1, heading2]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(one1);

const heading1 = React.createElement("h1", {}, "heading 1 of child 1");
const heading2 = React.createElement("h2", {}, "heading 2 of child 1");

const heading3 = React.createElement("h1", {}, "heading 1 of child 2");
const heading4 = React.createElement("h2", {}, "heading 2 of child 2");

const child1 = React.createElement("div", { id: "child1" }, [
  heading1,
  heading2,
]);
const child2 = React.createElement("div", { id: "child2" }, [
  heading3,
  heading4,
]);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
