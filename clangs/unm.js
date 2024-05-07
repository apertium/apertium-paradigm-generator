function add_unm() {
  return {
    dix: {
      'see [something]': {1: 'nem<v><tv><nn>', type: 'verb_ti'},
      'cook [something]': {1: 'wixenin<v><tv><nn>', type: 'verb_ti'},
      'have [something]': {1: 'ulhatu<v><tv><nn>', type: 'verb_ti'}
    },
    verb_ti: [
      {title: 'Subject',
       text: 'Who is the doer of the action?',
       seq: 3,
       values: [{label: 'I', tags: 'p1.sg'},
                {label: 'you (one person)', tags: 'p2.sg'},
                {label: 'he/she', tags: 'p3.sg'},
                {label: 'we (excluding you)', tags: 'p1.excl.pl'},
                {label: 'we (including you)', tags: 'p1.incl.pl'},
                {label: 'you all', tags: 'p2.pl'},
                {label: 'they', tags: 'p3.pl'}
               ]
      },
      {title: 'Object',
       text: 'What is the action done to?',
       seq: 4,
       values: [{label: 'it', tags: 'o_sg'},
                {label: 'them', tags: 'o_pl'}
               ]
      },
      {title: 'Negation',
       text: 'Is the action done or not?',
       seq: 2,
       values: [{label: 'done', tags: ''},
                {label: 'noe', tags: 'neg'}
               ]
      },
      {title: 'Tense',
       text: 'When does does the action take place?',
       templates: [{label: 'past/present', templ: '$1$2$3$4'},
                   {label: 'future', templ: 'xu<adv>$ ^$1$2$3$4'},
                   {label: 'subordinative', templ: 'tëli<cnjsub>$ ^$1<subord>$2$3$4'},
                   {label: 'want to', templ: 'kata<vaux>+$1$2$3$4'}
                  ]
      }
    ]
  };
}
