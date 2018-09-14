import BoxTypes from '../definitions/BoxTypes'

export default {
  boxes: {
    left: [
      {
        title: 'Obrigatórias',
        classes: [
          'MAC0101',
          'MAC0105',
          'MAC0110',
          'MAC0329',
          'MAT2453',
          'MAT0112',
          'MAC0239',
          'MAE0119',
          'MAC0121',
          'MAC0216',
          'MAT2454',
          'MAT0122',
          'MAC0102',
          'MAC0323',
          'MAC0209',
          'MAT0236',
          'MAC0210',
          'MAC0316',
          'MAC0338',
          'MAC0422',
          'MAC0350',
          'FLC0474',
          'MAC0499',
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
    right: [
      {
        title: 'Optativa de Estatística',
        classes: ['MAE0217', 'MAE0221', 'MAE0228'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
      {
        title: 'Optativa de Ciências',
        classes: [
          '4302112',
          '4302401',
          'GMG0630',
          '0440620',
          'QBQ0104',
          'QBQ1252',
          'QBQ1354',
        ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
  },
}
