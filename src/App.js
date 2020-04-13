import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Options from './components/Options';
import Rules from './components/Rules';
import DeckChoice from './components/DeckChoice';

const heroes = [
  {"response":"success","id":"195","name":"Cyborg Superman","powerstats":{"intelligence":"75","strength":"93","speed":"92","durability":"100","power":"100","combat":"80"},"biography":{"full-name":"Henry Henshaw","alter-egos":"No alter egos found.","aliases":["Grandmaster of the Manhunters","Herald of the Anti-Monitor","Alpha-Prime of the Alpha Lanterns"],"place-of-birth":"-","first-appearance":"Adventures of Superman #466 (May, 1990)","publisher":"DC Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"Cyborg","height":["-","0 cm"],"weight":["- lb","0 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"-","base":"Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601"},"connections":{"group-affiliation":"Alpha Lantern Corps, Manhunters, Warworld, formerly Apokolips and Sinestro Corps","relatives":"Terri Henshaw (wife, deceased)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/667.jpg"}},
  {"response":"success","id":"732","name":"Ironman","powerstats":{"intelligence":"100","strength":"85","speed":"58","durability":"85","power":"100","combat":"64"},"biography":{"full-name":"Tony Stark","alter-egos":"No alter egos found.","aliases":["Iron Knight","Hogan Potts","Spare Parts Man","Cobalt Man II","Crimson Dynamo","Ironman"],"place-of-birth":"Long Island, New York","first-appearance":"Tales of Suspence #39 (March, 1963)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'6","198 cm"],"weight":["425 lb","191 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"Inventor, Industrialist; former United States Secretary of Defense","base":"Seattle, Washington"},"connections":{"group-affiliation":"Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.","relatives":"Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/85.jpg"}},
  {"response":"success","id":"729","name":"Yoda","powerstats":{"intelligence":"88","strength":"52","speed":"33","durability":"25","power":"100","combat":"90"},"biography":{"full-name":"Yoda","alter-egos":"No alter egos found.","aliases":["-"],"place-of-birth":"-","first-appearance":"Star Wars: Episode V - The Empire Strikes Back (1980)","publisher":"George Lucas","alignment":"good"},"appearance":{"gender":"Male","race":"Yoda's species","height":["2'2","66 cm"],"weight":["38 lb","17 kg"],"eye-color":"Brown","hair-color":"White"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"Jedi Order, Jedi High Counsl, Galactic Republic","relatives":"Master: N'Kata Del Gormo, Apprentices: Dooku, Cin Drallig, Ikrit, Rahm Kota, Ki-Adi-Mundi, Oppo Rancisis, Luke Skywalker"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10454.jpg"}},
  {"response":"success","id":"69","name":"Batman","powerstats":{"intelligence":"81","strength":"40","speed":"29","durability":"55","power":"63","combat":"90"},"biography":{"full-name":"Terry McGinnis","alter-egos":"No alter egos found.","aliases":["Batman II","The Tomorrow Knight","The second Dark Knight","The Dark Knight of Tomorrow","Batman Beyond"],"place-of-birth":"Gotham City, 25th Century","first-appearance":"Batman Beyond #1","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["5'10","178 cm"],"weight":["170 lb","77 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"-","base":"21st Century Gotham City"},"connections":{"group-affiliation":"Batman Family, Justice League Unlimited","relatives":"Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"}},
  {"response":"success","id":"717","name":"Wolverine","powerstats":{"intelligence":"63","strength":"32","speed":"50","durability":"100","power":"89","combat":"100"},"biography":{"full-name":"Logan","alter-egos":"No alter egos found.","aliases":["Weapon X","Weapon Ten","Death","Mutate 9601","Jim Logan","Emilio Garra","Weapon Chi","Experiment X","Agent Ten","Peter Richards","Mai kethLogan","Mr. Patch"],"place-of-birth":"Alberta, Canada","first-appearance":"Incredible Hulk Vol. 2 #180","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Mutant","height":["5'3","160 cm"],"weight":["300 lb","135 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner","base":"Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"},"connections":{"group-affiliation":"X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army","relatives":"John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/161.jpg"}},
  {"response":"success","id":"176","name":"Chuck Norris","powerstats":{"intelligence":"50","strength":"80","speed":"47","durability":"56","power":"42","combat":"99"},"biography":{"full-name":"Carlos Ray Norris","alter-egos":"No alter egos found.","aliases":["Chuck"],"place-of-birth":"Ryan, Oklahoma, United States","first-appearance":"-","publisher":"null","alignment":"good"},"appearance":{"gender":"Male","race":"null","height":["5'10","178 cm"],"weight":["- lb","0 kg"],"eye-color":"-","hair-color":"-"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"-","relatives":"-"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/954.jpg"}},

]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards : heroes.map(heroe => {
        return {
          name : heroe.name,
          img : heroe.image.url,
          atk : heroe.powerstats.combat,
          hp : heroe.powerstats.durability,
          power : heroe.powerstats.power,
          deck : false
        }
      }
        )
    };
  }
  render(){
    console.log(this.state.cards)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/options" component={Options} />
            <Route path="/rules" component={Rules} />
            <Route path="/deckchoice" >
              <DeckChoice heroes={this.state.cards}/>
            </Route>
          </Switch>
      </Router>
      </div>
    );
  }

}

export default App;

