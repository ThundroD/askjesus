import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WWJDPage from './pages/WWJDPage';
import BlogPage from './pages/BlogPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'; // Ensure you have this component created
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Ensure you have this component created

import Article from './posts/Article';
import DigitalDetoxArticle from './posts/DigitalDetoxArticle';
import SermonOnTheDigitalMount from './posts/SermonOnTheDigitalMount';
import MiracleOfMindfulness from './posts/MiracleOfMindfulness';
import TurningWaterIntoWine from './posts/TurningWaterIntoWine';
import BlessedPeacemakers from './posts/BlessedPeacemakers';
import FeedingTheFiveThousand from './posts/FeedingTheFiveThousand';
import GoodSamaritanInTheCity from './posts/GoodSamaritanInTheCity';
import WalkingOnWater from './posts/WalkingOnWater';
import TheParableOfTheLostPhone from './posts/TheParableOfTheLostPhone';
import TheLastSupperSustainableEating from './posts/TheLastSupperSustainableEating';
import FromStoneTabletsToTablets from './posts/FromStoneTabletsToTablets';
import ProdigalSonReturns from './posts/ProdigalSonReturns';
import LoveThyNeighbor from './posts/LoveThyNeighbor';
import BeatitudesOfMentalHealth from './posts/BeatitudesOfMentalHealth';
import ModernMiracles from './posts/ModernMiracles';
import FishAndLoavesWealthDistribution from './posts/FishAndLoavesWealthDistribution';
import QuietQuittingJesusPerspective from './posts/QuietQuittingJesusPerspective';
import FromNazarethToNow from './posts/FromNazarethToNow';
import LovingYourEnemies from './posts/LovingYourEnemies';


function App() {
  useEffect(() => {
    // Script integration
    window.ezstandalone = window.ezstandalone || {};
    window.ezstandalone.cmd = window.ezstandalone.cmd || [];
    window.ezstandalone.cmd.push(function() {
      window.ezstandalone.define(103,104,105,106,107,108,109,110,111,112,113,114);
      window.ezstandalone.enable();
      window.ezstandalone.display();
    });
    // The empty dependency array ensures this effect runs once on mount
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wwjd" element={<WWJDPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/Jesus'-Tips-for-2024" element={<Article />} />
        <Route path="/blog/Digital-Detox" element={<DigitalDetoxArticle />} />
        <Route path="/blog/Sermon-On-The-Mount" element={<SermonOnTheDigitalMount />} />
        <Route path="/blog/Miracle-Of-Mindfullness" element={<MiracleOfMindfulness />} />
        <Route path="/blog/Turn-Water-To-Wine-Work-Life-Balance" element={<TurningWaterIntoWine />} />
        <Route path="/blog/Jesus-Peace-With-Trolls" element={<BlessedPeacemakers />} />
        <Route path="/blog/Feeding-the-5000" element={<FeedingTheFiveThousand />} />
        <Route path="/blog/Good-Samaritan-In-The-City" element={<GoodSamaritanInTheCity />} />
        <Route path="/blog/Walking-On-Water" element={<WalkingOnWater />} />
        <Route path="/blog/The-Parable-Of-The-Lost-Phoner" element={<TheParableOfTheLostPhone />} />
        <Route path="/blog/The-Last-Supper-Sustainable-Eating" element={<TheLastSupperSustainableEating />} />
        <Route path="/blog/Tablets-At-Sabbath" element={<FromStoneTabletsToTablets />} />
        <Route path="/blog/Prodigal-Son-Returns" element={<ProdigalSonReturns />} />
        <Route path="/blog/Love-Thy-Neighbor" element={<LoveThyNeighbor />} />
        <Route path="/blog/Beatitudes-Of-Mental-Health" element={<BeatitudesOfMentalHealth />} />
        <Route path="/blog/Modern-Miracles" element={<ModernMiracles />} />
        <Route path="/blog/Fish-And-Loaves-Wealth-Distribution" element={<FishAndLoavesWealthDistribution />} />
        <Route path="/blog/Quiet-Quitting-Jesus-Perspective" element={<QuietQuittingJesusPerspective />} />
        <Route path="/blog/From-Nazareth-To-Now" element={<FromNazarethToNow />} />
        <Route path="/blog/Loving-Your-Enemies" element={<LovingYourEnemies />} />


      </Routes>
    </Router>
  );
}

export default App;


