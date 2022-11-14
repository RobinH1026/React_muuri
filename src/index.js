/* React */
import React, { useState, useContext, useMemo } from "react";
import ReactDom from "react-dom";
/* Muuri react */
import { MuuriComponent, getResponsiveStyle } from "muuri-react";
import { useMediaQuery } from "react-responsive";
/* Utils & components */
import { generateItems, ThemeContext } from "./utils";
import { Header, Demo } from "./components";
/* Style */
import "./style.css";

// App.
const App = () => {
  // Items state.
  const [items] = useState(generateItems());
  const items1 = [
    {
      id: 1,
      color: "green",
      title: "sm"
    },
    {
      id: 2,
      color: "green",
      title: "sm"
    },
    {
      id: 3,
      color: "green",
      title: "sm"
    },
    {
      id: 4,
      color: "green",
      title: "sm"
    },
    {
      id: 5,
      color: "green",
      title: "sm"
    },
    {
      id: 6,
      color: "green",
      title: "sm"
    }
  ];

  const items2 = [
    {
      id: 7,
      color: "blue",
      title: "lg"
    },
    {
      id: 8,
      color: "blue",
      title: "lg"
    },
    {
      id: 9,
      color: "blue",
      title: "lg"
    },
    {
      id: 10,
      color: "blue",
      title: "lg"
    }
  ];

  // Items to children.
  const children1 = items1.map((props) => <Item key={props.id} {...props} />);
  const children2 = items2.map((props) => <Item key={props.id} {...props} />);

  return (
    <Demo>
      <Header />
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
      <ThemeContext.Provider value={style}>{children}</ThemeContext.Provider>
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
const Item = ({ color, title }) => {
  // The style concerns only the "dimensions" and "margins" of the items.
  const style = useContext(ThemeContext);

  return (
    <div style={style}>
      <div className="item-content">{title}</div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
