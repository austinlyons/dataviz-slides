// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive.js";
import SpaceReddit from "../assets/spaceReddit.js";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  wunderground: require("../assets/visual-forecast.png"),
  netflix: require("../assets/netflix-stock.png"),
  facebook: require("../assets/facebook-ipo.png"),
  nwsTable: require("../assets/nws-table.png"),
  nwsGraphic: require("../assets/nws-graphic.png"),
  riskpulse: require("../assets/riskpulse.png"),
  beerViz: require("../assets/beer-viz.png"),
};
let getImage = (img) => img.replace("/", "");

preloader(images);

const theme = createTheme({
  primary: "#203761",
  secondary: "#d9d9d9",
  tertiary: "#6EA1FF",
  quaternary: "#DA786F",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={600}>
          <Slide>
            <Heading size={1} fit caps margin="0 0 60px 0" textColor="secondary">
              Data Visualization
            </Heading>
            <Heading size={1} caps textColor="tertiary" textSize="3em">
              Austin Lyons
            </Heading>
            <Heading caps textColor="secondary" textSize="2em">
              Des Moines Web Geeks
            </Heading>
            <Link href="https://github.com/austinlyons/dataviz-slides" target="_blank">
              <Text bold caps textColor="quaternary" margin="60px 0 0 0">View on Github</Text>
              <Text bold caps textColor="quaternary">github.com/austinlyons/dataviz-slides</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={1} caps textColor="secondary">
              Outline
            </Heading>
            <List>
              <ListItem>Data Visualization Overview</ListItem>
              <ListItem>dc.js</ListItem>
              <ListItem>Beer Consumption Visualization</ListItem>
              <ListItem>Hands On Time</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              What?
            </Heading>
            <Text caps textColor="tertiary" margin="60px 0">Visual communication of data</Text>
          </Slide>

          <Slide>
            <Image src={getImage(images.wunderground)} height="500px"/>
          </Slide>

          <Slide>
            <Image src={getImage(images.netflix)} height="500px"/>
          </Slide>

          <Slide>
            <Image src={getImage(images.facebook)} height="500px"/>
            <Link target="_window" href="http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html?_r=0">
              <Text bold caps textColor="quaternary" margin="40px 0">NYT: Facebook IPO</Text>
            </Link>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              Why?
            </Heading>
            <List margin="60px 0">
              <ListItem>Unleash the human brain!</ListItem>
              <ListItem>Gain insight quickly</ListItem>
              <ListItem>Communicate a story</ListItem>
            </List>
          </Slide>

          <Slide>
            <Image src={getImage(images.nwsTable)} height="500px"/>
            <Text bold caps textColor="tertiary" margin="40px 0">Driving a point home</Text>
          </Slide>

          <Slide>
            <Image src={getImage(images.nwsGraphic)} height="500px"/>
            <Text bold caps textColor="tertiary" margin="40px 0">Much better</Text>
          </Slide>

          <Slide>
            <Heading size={1} fit textColor="secondary">
              What Makes A Good Data Viz?
            </Heading>
            <Link textColor="quaternary" target="_blank" href="http://www.informationisbeautiful.net/visualizations/what-makes-a-good-data-visualization/">
              see this graphic
            </Link>
            <List >
              <ListItem>Information</ListItem>
              <ListItem>Story</ListItem>
              <ListItem>Goal</ListItem>
              <ListItem>Visual Form</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              How?
            </Heading>
            <List margin="60px 0">
              <ListItem>Tool depends on use case</ListItem>
              <ListItem>Most tradeoffs happen between creator and consumer</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              Tools Spectrum Example
            </Heading>
            <List margin="60px 0">
              <ListItem>Excel Charts</ListItem>
              <ListItem>
                <Link textColor="quaternary" target="_window" href="https://drive.google.com/previewtemplate?id=0AoFkkLP2MB8kdHVSUFI1NEwtNHFWNzRCVlVnUUE0a1E&mode=public&ddrp=1">
                  Google Spreadsheet Charts
                </Link>
              </ListItem>
              <ListItem>
                <Link>
                  Web Browser (JS + HTML + CSS)
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              <Link textColor="quaternary" target="_window" href="https://d3js.org">
                D3.js
              </Link>
            </Heading>
            <List margin="60px 0">
              <ListItem>Data-Driven Documents</ListItem>
              <ListItem>JavaScript API</ListItem>
              <ListItem>SVG, HTML, CSS</ListItem>
              <ListItem>Powerful but has a learning curve (think Photoshop)</ListItem>
            </List>

            <Link bold textColor="quaternary" target="_window" href="http://www.nytimes.com/interactive/2014/11/04/upshot/senate-maps.html#state-ia">
               Amazing Example of D3
            </Link>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              <Link textColor="quaternary" target="_window" href="https://dc-js.github.io/dc.js/">
                dc.js
              </Link>
            </Heading>
            <Text margin="60px 0 0 0" textColor="secondary">Built on d3 - easier API for common charts</Text>
          </Slide>

          <Slide>
            <Heading fit size={1} caps textColor="secondary">
              Line Chart Example
            </Heading>
            <List margin="60px 0">
              <ListItem>
                <Link textColor="quaternary" target="_window" href="https://dc-js.github.io/dc.js/examples/line.html">
                  Chart
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="quaternary" target="_window" href="https://github.com/dc-js/dc.js/blob/master/web/examples/morley.csv">
                  Data
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="quaternary" target="_window" href="https://github.com/dc-js/dc.js/blob/master/web/examples/line.html">
                  Code
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit size={1} caps textColor="secondary">
              Line Chart In The Wild
            </Heading>
            <Image src={getImage(images.riskpulse)} height="490px"/>
            <Link target="_window" href="https://riskpulse.com/assets/131056/">
              <Text bold caps textColor="quaternary">Riskpulse Forecast Chart</Text>
            </Link>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              Beer Data Viz
            </Heading>
            <Image src={getImage(images.beerViz)} height="440px"/>
            <Link target="_window" href="https://github.com/austinlyons/beer-dataviz-code">
              <Text bold caps textColor="quaternary">Simpler code</Text>
            </Link>
            <Link target="_window" href="https://github.com/austinlyons/dcjs-leaflet-untappd">
              <Text bold caps textColor="quaternary">Tutorial on Github</Text>
            </Link>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              These slides are hot-reloading a React app!
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary" margin="0 0 20px 0">
              Async slides - space subreddit
            </Heading>
            <SpaceReddit />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link target="_window" href="https://github.com/FormidableLabs/spectacle">
              <Heading size={1} caps textColor="quaternary" margin="0 0 20px 0">
                Spectacle
              </Heading>
            </Link>

            <List>
              <ListItem>Version control your slides</ListItem>
              <ListItem>PDFs</ListItem>
              <ListItem>Presenter mode</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary" margin="0 0 40px 0">
              Try It Out
            </Heading>
            <Text size={20} caps textColor="secondary">
              Beer Data Viz
            </Text>
            <List>
              <ListItem>add a community rating chart</ListItem>
              <ListItem>beautify / update styles</ListItem>
              <ListItem>text mining of beer descriptions in beers.json</ListItem>
            </List>
            <Text size={20} caps textColor="secondary">
              Others
            </Text>
            <List>
              <ListItem>dc.js docs & examples</ListItem>
              <ListItem>slides source code</ListItem>
            </List>
          </Slide>


          <Slide>
            <Heading size={1} caps textColor="secondary">
              Questions?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
              THANKS!
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
