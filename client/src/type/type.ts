type LanguageType = {
  title: {
    reason: string,
    symptoms: string,
    pain_location: string,
    pain_description: string,
    hurt_scale: string,
    symptoms_duration: string,
    test: string,
    vaccine: string,
    medications: string,
    allergy: string,
    pregnancy: string,
    final_report: string,
    injury_location : string,
    injury_description: string
  },
  button: {
    submit: string,
    yes: string,
    no: string
  },
  duration: {
    about: string,
    days: string,
    hours: string,
    weeks: string,
    months: string,
    years: string
  },
  final_report: {
    symptoms: string,
    pain: string,
    pain_description: string,
    pain_scale: string,
    duration: string,
    other_medication: string,
    pregnancy: string,
    allergies: string,
    allergies_name: string,
    special_notes: string,
    test: string,
    vaccine: string
  },
  
  reason: {
    illness: string,
    injury: string,
    vaccine: string,
    test: string
  },

  symptoms: {
    fever: string,
    sore_throat: string,
    cough: string,
    sneezing: string,
    nausea: string,
    pain: string,
    congestion: string
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
    sharp: string,
    throbbing: string,
    aching: string,
    burning: string,
    cramping: string,
    numbness: string,
    constant: string,
    sudden: string
  },

  hurt: {
    no_pain: string,
    very_mild: string,
    discomforting: string,
    tolerable: string,
    distressing: string,
    very_distressing: string,
    intense: string,
    very_intense: string,
    utterly_horrible: string,
    excruciating_unbearable: string,
    unimaginable_unspeakable: string
  },

  test: {
    blood_test: string,
    urine_test: string,
    allergy_test: string,
    ultrasound: string,
    STD_test: string,
    X_ray: string,
    mammogram: string,
    pap_smear: string,
    MRI_CAT_scan: string
  },

  vaccine: {
    influenza: string,
    COVID_19: string,
    HPV: string,
    measles: string
  },

  other_medication: {
    medication_name: string,
    dosage: string
  },

  allergies: {
    allergies_name: string
  },

  injury_location: {
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

  injury_description: {
    cut_gash: string,
    bruise: string,
    bump: string,
    swelling: string,
    scratch: string,
    scrape: string,
    break: string
  }

}

export type { LanguageType };
