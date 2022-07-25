import React, { useRef, useState } from "react";
import {
  IonApp,
  setupIonicReact,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonCard,
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<Number>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  // const [heightInput, setHeightInput] = useState('')
  // const [weightInput, setWeightInput] = useState('')
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBMI(bmi);
  };
  const resetInputs = () => {
    // e.preventDefault()
    // e.target.value = setHeightInput("")
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
    // if (calculatedBMI) {
    //   setCalculatedBMI("");
    // }
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Your Height</IonLabel>
          <IonInput id="height-input" ref={heightInputRef}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Your Weight</IonLabel>
          <IonInput id="weight-input" ref={weightInputRef}></IonInput>
        </IonItem>

        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonButton id="calc-btn" onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Calculate
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton fill="outline" id="reset-btn" onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow id="result">
            {calculatedBMI && (
              <IonCol>
                <IonCard>
                  <h2>{calculatedBMI}</h2>
                </IonCard>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
