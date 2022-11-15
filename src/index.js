/* React */
import React, { useState, useContext, useMemo } from "react";
import ReactDom from "react-dom";
/* Muuri react */
import { MuuriComponent, getResponsiveStyle } from "muuri-react";
import { useMediaQuery } from "react-responsive";
/* Utils & components */
import { ThemeContext } from "./utils";
import { Header, Demo } from "./components";
import SideBar from "./SideBar";
/* Style */
import "./style.css";
import 'antd/dist/antd.css';
import Crypto from "./assets/images/crypto.png"
import Img1 from "./assets/images/img.png"

// App.
const App = () => {
  const items1 = [
    {
      id: 1,
      color: "green",
      title: "sm1"
    },
    {
      id: 2,
      color: "green",
      title: "sm2"
    },
    {
      id: 3,
      color: "green",
      title: "sm3"
    },
    {
      id: 4,
      color: "green",
      title: "sm4"
    },
    {
      id: 5,
      color: "green",
      title: "sm5"
    },
    {
      id: 6,
      color: "green",
      title: "sm6"
    }
  ];

  const items2 = [
    {
      id: 7,
      color: "blue",
      title: "lg1-1",
      header: "Watchlist",
      show: true
    },
    {
      id: 8,
      color: "blue",
      title: "lg2-2",
      header: "Tweets",
      show: true
    },
    {
      id: 9,
      color: "blue",
      title: "lg3-3",
      header: "Ethereum Chart",
      show: true
    },
    {
      id: 10,
      color: "blue",
      title: "lg4-4",
      header: "New Coins",
      show: true
    }
  ];
  const [items, setItems] = useState(items2);
  const children1 = items1.map((props) => {
    return(
      <Item key={props.id} {...props}>
      </Item>
    )
  });
  const children2 = items.filter(item=>item.show).map((props) => <Item key={props.id} {...props} />);

  const toggleItem = ({ id }) => {
    const newItems = items.map((item, index) => {
      if (id === item.id) {
        return {
          ...item,
          show: !item.show
        };
      }
      return { ...item }
    }
    );
    setItems(newItems);
  }

  return (
    <div>
      <Header />
      <div className="home">
        <SideBar items={items} toggleItem={toggleItem} />
        <div className="contain_div">
        <Demo>
          <ThemeProvider1>
            <MuuriComponent
              dragEnabled
              dragFixed
              dragSortPredicate={{
                action: "swap"
              }}
              dragSortHeuristics={{
                sortInterval: 0
              }}
            >
              {children1}
            </MuuriComponent>
          </ThemeProvider1>
          <ThemeProvider2>
            <MuuriComponent
              dragEnabled
              dragFixed
              dragSortPredicate={{
                action: "swap"
              }}
              dragSortHeuristics={{
                sortInterval: 0
              }}
            >
              {children2}
            </MuuriComponent>
          </ThemeProvider2>
        </Demo>
        </div>
      </div>
    </div>
    
  );
};

// Responsive theme provider of children1.
const ThemeProvider1 = ({ children }) => {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 824px)"
  });

  // Memoize the style.
  const style = useMemo(() => {
    return getResponsiveStyle({
      columns: isBigScreen ? 1 / 6 : 1 / 6,
      margin: "1%",
      ratio: 2,
    });
  }, [isBigScreen]);

  return (
    <div className="sm_div">
      <ThemeContext.Provider value={style}>
         {children}
      </ThemeContext.Provider>
    </div>
  );
};
const ThemeProvider2 = ({ children }) => {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 824px)"
  });

  // Memoize the style.
  const style = useMemo(() => {
    return getResponsiveStyle({
      columns: isBigScreen ? 1 / 2 : 1 / 2,
      margin: "1%",
      ratio: 2
    });
  }, [isBigScreen]);

  return (
    <div>
      <ThemeContext.Provider value={style}>{children}</ThemeContext.Provider>
    </div>
  );
};

// Item component.
const Item = ({ color, title, id }) => {
  // The style concerns only the "dimensions" and "margins" of the items.
  const style = useContext(ThemeContext);

  return (
    <div style={style}>
      <div className={id<7?"item-content":"item-content lg_box"}>
        {id === 1?
          <div>
            <div className="address">
              <img src={Crypto} alt="crypto" className="crypto" />
              <p>0x359…1a476</p>
            </div>
            <p className="arbitrage"><img src={Img1} alt="Img1" width="13px" /> &nbsp; Arbitrage</p>
            <div className="row_div" style={{ marginTop:'10px' }}>
              <div className="col_4"><p>Profit:</p></div>
              <div className="col_8"><p className="div_p">$556,621.18</p></div>
            </div>
            <div className="row_div">
              <div className="col_4"><p>Cost:</p></div>
              <div className="col_8">$6,219.00</div>
            </div>
            <div className="row_div">
              <div className="col_4"><p>ROI:</p></div>
              <div className="col_8">$8,958.61</div>
            </div>
          </div>
        :
        <p></p>
      }
        {/* {title} */}
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
