import { Carousel } from "react-carousel-minimal";
import "./styles.css";
import i1 from "../../assets/1.jpg";
import React from "react";
function Header() {
  const data = [
    {
      image: i1,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    },
  ];

  const [state, setState] = React.useState({
    isOpenMenu: false,
  });

  return (
    <div style={{ width: "100%", height: "550px" }}>
      <Carousel
        showNavBtn={false}
        data={data}
        time={4000}
        width="100%"
        height="550px"
        automatic={true}
        dots={true}
        slideImageFit="cover"
      />
      <div className="headerBlock">
        <div className="header">
          <div className="logo" />
          <h1
            onClick={() => {
              setState({ isOpenMenu: true });
            }}
          >
            MENU
          </h1>
        </div>
      </div>
      {state.isOpenMenu && (
        <div className="menuBlock">
          <div
            className="close"
            onClick={() => {
              setState({ isOpenMenu: false });
            }}
          />
          <div className="menu">
            <a>??????????????</a>
            <a>?????? ??????</a>
            <a>?????????????? ????????????????</a>
            <a>?????????????????? ????????????????</a>
            <a>??????????????</a>
            <a>????????????????</a>
            <a>???????? ???? ????????????</a>
            <a>????????????????</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
