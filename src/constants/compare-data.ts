const dataSource = [
  {
    path: '/sonarsource',
    name: 'Sonar Cloud',
    languageSupport: 'More than 17 languages',
    ideEditorIntegration: 'Sonar Lint',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
  {
    path: '/sonarsource',
    name: 'Sonar Qube',
    languageSupport: 'More than 17 languages',
    ideEditorIntegration: 'Sonar Lint',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
  {
    path: '/danger',
    name: 'Danger Systems',
    languageSupport: 'Java, JavaScript, TypeScript',
    ideEditorIntegration: 'Yes',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
  {
    path: '/embold',
    name: 'Embold',
    languageSupport: 'Java, JavaScript, TypeScript',
    ideEditorIntegration: 'Yes',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
  {
    path: '/synk',
    name: 'Synk',
    languageSupport: 'Java, JavaScript, TypeScript',
    ideEditorIntegration: 'Yes',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
  {
    path: '/codacy',
    name: 'Codacy',
    languageSupport: 'Java, JavaScript, TypeScript',
    ideEditorIntegration: 'Yes',
    features: '',
    pros: '',
    cons: '',
    pricing: 'Free',
    notes: '',
  },
];

export default dataSource.map((d) => ({ ...d, id: d.name }));
