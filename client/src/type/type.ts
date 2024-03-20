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

type FrameFiveLanguageType = {
    title: {
        symptoms: string;
        pain_location: string;
        pain_description: string;
        hurt: string;
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
    hurt: {
        no_pain: string;
        very_mild: string;
        discomforting: string;
        tolerable: string;
        distressing: string;
        very_distressing: string;
        intense: string;
        very_intense: string;
        utterly_horrible: string;
        excruciating_unbearable: string;
        unimaginable_unspeakable: string;
    },
    button: {
        submit: string
    }
}


  
export type {   FrameOneLanguageType, 
                FrameTwoLanguageType, 
                FrameThreeLanguageType,
                FrameFourLanguageType,
                FrameFiveLanguageType
            };