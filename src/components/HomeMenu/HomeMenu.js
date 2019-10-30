import React from "react";

import HomeMenuItem from "../../components/HomeMenuItem/HomeMenuItem";

import css from "./HomeMenu.module.scss";

class HomeMenu extends React.Component {
  state = {
    sections: [
      {
        id: 1,
        title: "Womens",
        subtitle: "Shop Now",
        image: "https://source.unsplash.com/rDEOVtE7vOs/600x400",
        size: "large"
      },
      {
        id: 2,
        title: "Men",
        subtitle: "Shop Now",
        image: "https://source.unsplash.com/agGIKYs4mYs/600x400",
        size: "large"
      },
      {
        id: 3,
        title: "Hats",
        subtitle: "Shop Now",
        image: "https://source.unsplash.com/2ki0-a7-gHw/600x400",
        size: ""
      },
      {
        id: 4,
        title: "Jackets",
        subtitle: "Shop Now",
        image: "https://source.unsplash.com/1SiXS0xQHTA/600x400",
        size: ""
      },
      {
        id: 5,
        title: "Acessories",
        subtitle: "Shop Now",
        image: "https://source.unsplash.com/sEq4onJnWrI/600x400",
        size: ""
      }
    ]
  };
  render() {
    const { sections } = this.state;

    return (
      <div className={css.HomeMenu}>
        {sections.map(({ id, title, subtitle, image, size }) => (
          <HomeMenuItem
            key={id}
            title={title}
            subtitle={subtitle}
            image={image}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default HomeMenu;
