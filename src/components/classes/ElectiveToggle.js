import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withElectives from '../providers/withElectives'

class ElectiveToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      code,
      color,
      mandatoryClasses,
      freeElectives,
      toggleElective,
    } = this.props

    const isFree = freeElectives.includes(code)

    return mandatoryClasses.includes(code) ? (
      <div className="w5 tc ba bw1 b--light-silver br3 ph3 pv1 silver fw5">
        Obrigatória
      </div>
    ) : (
      <div className="w5">
        <div className={`ba bw1 b--${color} br3 flex overflow-hidden`}>
          <div
            className={`br b--${color} ph3 pv1 fw5 flex-auto tc ${
              isFree
                ? `${color} pointer hover-bg-light-gray`
                : `white bg-${color}`
            }`}
            onClick={() => (isFree ? toggleElective(code) : null)}
          >
            Eletiva
          </div>
          <div
            className={`bl b--${color} ph3 pv1 fw5 flex-auto tc ${
              isFree
                ? `white bg-${color}`
                : `${color} pointer hover-bg-light-gray`
            }`}
            onClick={() => (isFree ? null : toggleElective(code))}
          >
            Livre
          </div>
        </div>
      </div>
    )
  }
}

ElectiveToggle.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  freeElectives: PropTypes.array.isRequired,
  toggleElective: PropTypes.func.isRequired,
}

export default withElectives(ElectiveToggle)
