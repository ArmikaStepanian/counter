// replace backend temporary

import {Category} from '../model/Category';
import {Measure} from '../model/Measure';
import {Exercise} from '../model/Exercise';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Dumbbell exercises'},
    {id: 2, title: 'Kettlebell exercises'},
    {id: 3, title: 'Burpees'},
    {id: 4, title: 'Clean'},
    {id: 5, title: 'Jerk'},
    {id: 6, title: 'Snatch'},
    {id: 7, title: 'Weighted squats'},
    {id: 8, title: 'Gymnastics'},
  ];

  static measures: Measure[] = [
    {id: 1, title: 'Kg'},
    {id: 2, title: 'Meters'},
    {id: 3, title: 'Seconds'},
    {id: 4, title: 'Lbs'},
    {id: 5, title: 'Calories'},
    {id: 6, title: 'Reps'},
    {id: 7, title: 'Lbs'},
  ];

  static exercises: Exercise[] = [
    {
      id: 1,
      title: 'Snatch 30 kg',
      category: TestData.categories[5],
      amount: 12,
      measure: TestData.measures[5],
      date: new Date('2020-01-10')
    },
    {
      id: 2,
      title: 'Burpees over box',
      category: TestData.categories[2],
      amount: 10,
      measure: TestData.measures[5],
      date: new Date('2020-01-15')
    },
    {
      id: 3,
      title: 'Russian kelltebell swings 24 kg',
      category: TestData.categories[1],
      amount: 25,
      measure: TestData.measures[5],
      date: new Date('2020-01-16')
    },
    {
      id: 4,
      title: 'Run',
      category: TestData.categories[7],
      amount: 2000,
      measure: TestData.measures[1],
      date: new Date('2020-01-16')
    }
  ];
}

