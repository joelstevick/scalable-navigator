import { Vertice } from './vertice.interface';

export const tree: Vertice = {
  label: 'Walt Disney $550',
  color: 'green',
  children: [
    {
      label: 'Movies $250',
      color: 'blue',
      children: [
        {
          label: 'Snow White $50'
        },
        {
          label: 'Bambi $200'
        }
      ]
    },
    {
      label: 'Theme Parks $300',
      color: 'orange',
      children: [
        {
          label: 'DisneyWorld $200'
        },
        {
          label: 'DisneyLand $100'
        }
      ]
    }
  ]
};
