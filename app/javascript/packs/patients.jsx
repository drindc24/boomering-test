// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Patients = props => {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch('/api/v1/patients')
      .then(response => response.json())
      .then((data) => setPatients(data))
  }, [])
  return (
    <div>
      <h1>Patients List</h1>
      <div className='media'>
        <div className='media-body'>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Number</th>
              <th>Description</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              {
                patients.map(patient => {
                  return (
                    <tr>
                      <td>{patient.name}</td>
                      <td>{patient.date}</td>
                      <td>{patient.number}</td>
                      <td>{patient.description}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

Patients.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Patients />,
    document.getElementById("react-reference"),
  )
})
