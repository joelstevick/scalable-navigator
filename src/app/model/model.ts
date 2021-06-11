import { Vertice } from './vertice.interface';

export const tree: Vertice = {
  label: 'Walt Disney',
  color: 'green',
  children: [
    {
      label: 'Movies',
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
      label: 'Theme Parks',
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
export const tree2: Vertice = {
  label: 'NFL',
  color: 'green',
  children: [
    {
      label: 'AFC',
      color: 'blue',
      children: [
        {
          label: 'East'
        }
      ]
    },
    {
      label: 'NFC',
      color: 'orange',
      children: [
        {
          label: 'East'
        }
      ]
    }
  ]
};
