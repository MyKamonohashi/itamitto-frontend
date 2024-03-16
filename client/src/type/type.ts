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
    button: {
        submit: string
    }
}

type FrameThreeLanguageType = {
    title: {
        symptoms: string;
        pain_location: string;
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
    button: {
        submit: string
    }
}
  
export type { FrameOneLanguageType, FrameTwoLanguageType, FrameThreeLanguageType };