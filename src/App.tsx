import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Falcomarklogin from './pages/falcomarklogin';
import FalcoflexWorkSolutions from './pages/FalcoflexWorkSolutions';
import Olvidolacuentafm from './pages/falcomarketplace/olvidolacuentafm';
import Crearcuenta  from './pages/falcomarketplace/falompcreatcuenta';
import Crearcuentffs from './pages/Falcows/Falcocr';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home/>
          
          </Route> 
          <Route exact path="/falcomarklogin">
            <Falcomarklogin/>

          </Route>

         
          <Route exact path="/falcoflexworksolutions">
            <FalcoflexWorkSolutions/>
          </Route>
          <Route exact path="/olvidolacuentafm">
            <Olvidolacuentafm/>
          </Route>
          <Route exact path="/crearcuenta">
            <Crearcuenta/>
          </Route>
          <Route exact path="/falcocr">
            <Crearcuentffs/>
          </Route>

        
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;
