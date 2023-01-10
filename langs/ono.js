function add_ono() {
  return {
    verb_iv: [
      {
        id: 'habAgent',
        label: 'Do-er Pronouns (Agent) Habitual Aspect',
        tabcols: ['Singular', 'Dual', 'Plural'],
				tabrows: ['First person Inclusive', 'First person Exclusive','Second person',
                  'Third Person FemZoic', "Third Person Mascluine", "Third Person Feminine/Indefinite"],

        tabdata: [
          [{tags: 'hab.a1sg', height:2},{tags: 'hab.a1duincl'},{tags: 'hab.a1plincl'}],
					[{tags: ''}, {tags: 'hab.a1duexcl'},{tags: 'hab.a1plexcl'}],
					[{tags: 'hab.a2sg'}, {tags: 'hab.a2du'}, {tags: 'hab.a2pl'}],
          [{tags: 'hab.a3FZsg'}, {tags: 'hab.a3FZdu'}, {tags: 'hab.a3FZpl'}],
					[{tags: 'hab.a3Msg'}, {tags: 'hab.a3Mdu'}, {tags: 'hab.a3Mpl'}],
					[{tags: 'hab.a3FIsg'}]
        ]
      },
      {
        id: 'statPatient',
        label: 'Participant Pronouns (Patient) Stative Aspect',
        tabcols: ['Singular', 'Dual', 'Plural'],
				tabrows: ['First person', 'Second person',
                  'Third Person FemZoic', "Third Person Mascluine", "Third Person Feminine/Indefinite"],

        tabdata: [
          [{tags: 'stat.p1sg'},{tags: 'stat.p1du'},{tags: 'stat.p1pl'}],
					[{tags: 'stat.p2sg'}, {tags: 'stat.p2du'}, {tags: 'stat.p2pl'}],
          [{tags: 'stat.p3FZsg'}, {tags: ''}, {tags: 'stat.p3FZpl'}],
					[{tags: 'stat.p3Msg'}, {tags: ''}, {tags: 'stat.p3Mpl'}],
					[{tags: 'stat.p3FIsg'}]
        ]
      },
      {
        id: 'punctAgent',
        label: 'Do-er Pronouns (Agent) Punctual Aspect Future',
        tabcols: ['Singular', 'Dual', 'Plural'],
				tabrows: ['First person Inclusive', 'First person Exclusive','Second person',
                  'Third Person FemZoic', "Third Person Mascluine", "Third Person Feminine/Indefinite"],
        
        tabdata: [
          [{tags: 'punct.fut.a1sg', height:2},{tags: 'punct.fut.a1duincl'},{tags: 'punct.fut.a1plincl'}],
					[{tags: ''}, {tags: 'punct.fut.a1duexcl'},{tags: 'punct.fut.a1plexcl'}],
					[{tags: 'punct.fut.a2sg'}, {tags: 'punct.fut.a2du'}, {tags: 'punct.fut.a2pl'}],
          [{tags: 'punct.fut.a3FZsg'}, {tags: 'punct.fut.a3FZdu'}, {tags: 'punct.fut.a3FZpl'}],
					[{tags: 'punct.fut.a3Msg'}, {tags: 'punct.fut.a3Mdu'}, {tags: 'punct.fut.a3Mpl'}],
					[{tags: 'punct.fut.a3FIsg'}]
        ]
      }
    ]
  };
}
