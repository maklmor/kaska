export const SLEEPING_OPTIONS_ITEMS = [
 {
  title: 'Noc 7.7.',
  value: 'fridayNight',
 },
 {
  title: 'Noc 8.7.',
  value: 'saturdayNight',
 },
]

export const ERROR_MESSAGE = {
  0: '',
  1: 'Formular nebol vyplneny spravne',
  2: 'Pri ukladani nastal problem - skuste sa prosim registrovat neskor, alebo to urobte priamo'
}

export const FOOD_DATA = [
  {
    fieldName: 'fridayEveningFood',
    title: 'Vecera piatok (7.7.)',
    defaultValue: 'foodNull',
    items: [
      {
        title: 'NORMALNI: Hovadzie steaky na grille \n(ak bude lacne maso, mozno vratim peniaze)',
        value: 'fridayEveningNormal',
        price: 5
      },
      {
        title: 'NECHCEM JEST',
        value: 'foodNull',
        price: 0
      },
    ],
  },
  {
    fieldName: 'saturdayLunchFood',
    title: 'Obed/ ranajky sobota (8.7.)',
    defaultValue: 'foodNull',
    items: [
      {
        title: 'NORMALNI: Kuracie maso + klobasy + atd. na grille',
        value: 'saturdayLunchNormal',
        price: 4
      },
      {
        title: 'VEGAN: Zeleninovy salat',
        value: 'saturdayLunchVegan',
        price: 2
      },
      {
        title: 'MIX: NORMALNI + VEGAN priloha k tomu',
        value: 'saturdayLunchMix',
        price: 6
      },
      {
        title: 'NECHCEM JEST',
        value: 'foodNull',
        price: 0
      },
    ],
  },
  {
    fieldName: 'saturdayEveningFood',
    title: 'Vecera sobota (8.7.)',
    defaultValue: 'foodNull',
    items: [
      {
        title: 'NORMALNI: Hokkaido a bataty so slaninou atd.',
        value: 'saturdayEveningNormal',
        price: 2
      },
      {
        title: 'VEGAN: Hokkaido a bataty len tak',
        value: 'saturdayEveningVegan',
        price: 2
      },
      {
        title: 'NECHCEM JEST',
        value: 'foodNull',
        price: 0
      },
    ],
  },
]