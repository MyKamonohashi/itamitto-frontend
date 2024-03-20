type FrameOneLanguageType = {
    title: {
        reason: string
    },
    reason: {
        illness: string,
        injury: string,
        vaccine: string,
        test: string
    }
}

type FrameTwoLanguageType = {
    title: {
        symptoms: string;
        pain_location: string;
        pain_description: string;
    },
    symptoms: {
        fever: string;
        sore_throat: string;
        cough: string;
        sneezing: string;
        nausea: string;
        pain: string;
        congestion: string;
    },
    pain_location: {
        head: string,
        stomach: string,
        arm: string,
        leg: string,
        back: string,
        shoulder: string,
        neck: string,
        chest: string,
        eyes_ears_nose: string
    },
    pain_description: {
        sharp: string;
        throbbing: string;
        aching: string;
        burning: string;
        cramping: string;
        numbness: string;
        constant: string;
        sudden: string;
    },
    button: {
        submit: string
    }
}

type FrameThreeLanguageType = {
    title: {
        symptoms: string;
        pain_location: string;
        pain_description: string;
    },
    pain_location: {
        head: string,
        stomach: string,
        arm: string,
        leg: string,
        back: string,
        shoulder: string,
        neck: string,
        chest: string,
        eyes_ears_nose: string
    },
    pain_description: {
        sharp: string;
        throbbing: string;
        aching: string;
        burning: string;
        cramping: string;
        numbness: string;
        constant: string;
        sudden: string;
    };
    button: {
        submit: string
    }
}

type FrameFourLanguageType = {
    title: {
        symptoms: string;
        pain_location: string;
        pain_description: string;
    },
    pain_description: {
        sharp: string;
        throbbing: string;
        aching: string;
        burning: string;
        cramping: string;
        numbness: string;
        constant: string;
        sudden: string;
    },
    button: {
        submit: string
    }
}

type FrameSixLanguageType = {
  title: {
    symptoms_duration: string
  },
  button: {
    submit: string
  },
  duration: {
    about: string,
    days: string,
    hours: string,
    weeks: string,
    months: string,
    years: string
  }
}


  
export type {   
  FrameOneLanguageType, 
  FrameTwoLanguageType, 
  FrameThreeLanguageType,
  FrameFourLanguageType,
  FrameSixLanguageType
};