function add_ono() {
  return {
    verb_iv: [
      {
        id: 'habAgent',
        label: 'Habitual-Agent',
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
      }
    ]
  };
}
