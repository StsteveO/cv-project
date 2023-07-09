import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

//eslint-disable-next-line
class Description extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    return (
      <>
        <div>
          <SectionTitle sectionName="Description" />
        </div>
        <div className="description-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem minus rerum numquam consequuntur aliquid a quis suscipit, explicabo ratione error modi assumenda repellat esse animi nisi vero mollitia accusantium?
        Et officia nostrum laboriosam animi nemo sit, pariatur consectetur, ducimus obcaecati sunt, deleniti cupiditate quod voluptate quidem doloribus! Quisquam error perferendis deserunt dolore itaque? Iste, explicabo ex. Iste, blanditiis unde.
        Fugit earum, deserunt dicta, nihil corporis voluptatibus dolores, alias nulla aliquam excepturi molestias recusandae cum cumque maiores necessitatibus mollitia a ab. Sequi nobis iusto necessitatibus aspernatur aliquid, eligendi dolore repudiandae!</div>
      </>
    );
  }
}
export default Description;
