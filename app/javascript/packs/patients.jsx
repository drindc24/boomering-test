// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Patients = props => {
  const [patients, setPatients] = useState([])
  const [order, setOrder] = useState('desc')
  const orderBy = (e) => {
    e.preventDefault();
    toggleOrder();
    const orderByParam = e.currentTarget.textContent.toLowerCase()
    fetch(`/api/v1/patients?order=${order}&order_by=${orderByParam}`)
      .then(response => response.json())
      .then((data) => setPatients(data))
  }

  const toggleOrder = () => {
    let currentOrder = order === 'desc' ? 'asc' : 'desc'
    setOrder(currentOrder)
  }

  useEffect(() => {
    fetch('/api/v1/patients')
      .then(response => response.json())
      .then((data) => setPatients(data))
  }, [])

  const formSubmit = (e) => {
    e.preventDefault()
    const searchString = e.target.searchName.value
    fetch(`/api/v1/patients?search=${searchString}`)
      .then(response => response.json())
      .then((data) => setPatients(data))
  }

  return (
    <div>
      <h1>Patients List</h1>
      <form onSubmit={formSubmit}>
        <input type="text" name="searchName" placeholder="Search" />
        <button type="submit">
          Search
        </button>
      </form>
      <div className='media'>
        <div className='media-body'>
          <table className="table table-hover">
            <thead>
            <tr>
              <th><a href='#' onClick={e => orderBy(e)}>Name</a></th>
              <th><a href='#' onClick={e => orderBy(e)}>Date</a></th>
              <th><a href='#' onClick={e => orderBy(e)}>Number</a></th>
              <th><a href='#' onClick={e => orderBy(e)}>Description</a></th>
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
