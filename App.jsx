import React from "react";
import Heading from "./Heading";
import List from "./List";
import Image from "./Image";

function App() {
  return (
    <div>
      <Heading text="React" />
      <Heading text="Vue" />
      <Heading text="Ahmet" />
      <Heading text="Mehmet" />
      <Image src="https://picsum.photos/id/237/200/300" />
      <Image src="https://picsum.photos/seed/picsum/200/300" />
      <Image src="https://picsum.photos/200/300?grayscale" />
      <Image src="https://picsum.photos/200/300/?blur" />
      <List src="https://picsum.photos/id/870/200/300?grayscale&blur=2" />
    </div>
  );
}

export default App;
