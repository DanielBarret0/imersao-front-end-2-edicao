import React from "react";
import './Main-container.css';

import smallRight from '../assets/icons/small-right.png';       
import smallLeft from '../assets/icons/small-left.png';    
import search from  '../assets/icons/search.png';
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';

const Header = () => {
  return (
    <main>
      <div className="main-container">
        <nav className="header__navigation">
          <div className="navigation">
            <button className="arrow-left">
              <img src={smallLeft} alt="Arrow Left" />
            </button>
            <button className="arrow-right">
              <img src={smallRight} alt="Arrow Right" />
            </button>
          </div>
          <div className="header__search">
            <img src={search} alt="Search" />
            <input 
              id="search-input" 
              maxLength="800" 
              autoCorrect="off" 
              autoCapitalize="off" 
              spellCheck="false"
              placeholder="O que você quer ouvir?" 
            />
          </div>
          <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
        </nav>

        {/* PLAYLIST */}
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting">Boas vindas</h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            {/* LIST DE CARDS */}
            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  {/* CARD 1 */}
                  <a href="#" className="cards">
                    <div className="cards card1">
                      <img src={playlist1} alt="Boas festas" />
                      <span>Boas festas</span>
                    </div>
                  </a>

                  {/* CARD 2 */}
                  <a href="#" className="cards">
                    <div className="cards card2">
                      <img src={playlist2} alt="Feitos para você" />
                      <span>Feitos para você</span>
                    </div>
                  </a>

                  {/* CARD 3 */}
                  <a href="#" className="cards">
                    <div className="cards card3">
                      <img src={playlist3} alt="Lançamentos" />
                      <span>Lançamentos</span>
                    </div>
                  </a>

                  {/* CARD 4 */}
                  <a href="#" className="cards">
                    <div className="cards card4">
                      <img src={playlist4} alt="Creators" />
                      <span>Creators</span>
                    </div>
                  </a>

                  {/* CARD 5 */}
                  <a href="#" className="cards">
                    <div className="cards card5">
                      <img src={playlist5} alt="Para treinar" />
                      <span>Para treinar</span>
                    </div>
                  </a>

                  {/* CARD 6 */}
                  <a href="#" className="cards">
                    <div className="cards card6">
                      <img src={playlist6} alt="Podcasts" />
                      <span>Podcasts</span>
                    </div>
                  </a>

                  {/* CARD 7 */}
                  <a href="#" className="cards">
                    <div className="cards card7">
                      <img src={playlist7} alt="Sertanejo" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  {/* CARD 8 */}
                  <a href="#" className="cards">
                    <div className="cards card8">
                      <img src={playlist8} alt="Samba e pagode" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  {/* CARD 9 */}
                  <a href="#" className="cards">
                    <div className="cards card9">
                      <img src={playlist9} alt="Funk" />
                      <span>Funk</span>
                    </div>
                  </a>

                  {/* CARD 10 */}
                  <a href="#" className="cards">
                    <div className="cards card10">
                      <img src={playlist10} alt="MPB" />
                      <span>MPB</span>
                    </div>
                  </a>

                  {/* CARD 11 */}
                  <a href="#" className="cards">
                    <div className="cards card11">
                      <img src={playlist11} alt="Rock" />
                      <span>Rock</span>
                    </div>
                  </a>

                  {/* CARD 12 */}
                  <a href="#" className="cards">
                    <div className="cards card12">
                      <img src={playlist12} alt="Hip Hop" />
                      <span>Hip Hop</span>
                    </div>
                  </a>

                  {/* CARD 13 */}
                  <a href="#" className="cards">
                    <div className="cards card13">
                      <img src={playlist13} alt="Indie" />
                      <span>Indie</span>
                    </div>
                  </a>

                  {/* CARD 14 */}
                  <a href="#" className="cards">
                    <div className="cards card14">
                      <img src={playlist14} alt="Relax" />
                      <span>Relax</span>
                    </div>
                  </a>

                  {/* CARD 15 */}
                  <a href="#" className="cards">
                    <div className="cards card15">
                      <img src={playlist15} alt="Música Latina" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>

          <div id="result-artist" className="hidden">
            <div className="grid-container">
              <div className="artist-card">
                <div className="card-img">
                  <img id="artist-img" className="artist-img" alt="Artist" />
                  <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                  </div>
                </div>
                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href="#"></a>
                  <span className="artist-name" id="artist-name"></span>
                  <span className="artist-categorie">Artista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
