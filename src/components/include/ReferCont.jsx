import React from "react";

const referInfo = [
  {
    num: 1,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 2,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 3,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 4,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 5,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 6,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 7,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 8,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 9,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
  {
    num: 10,
    name: "background",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "✨✨✨✨✨",
  },
];

const ReferText = ({ num, name, desc, star }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{name}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
      </a>
    </li>
  );
};
const ReferCont = () => {
  return (
    <section className="cont__Refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {referInfo.map((info) => (
              <ReferText
                num={info.num}
                name={info.name}
                desc={info.desc}
                star={info.star}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
