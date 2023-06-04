import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Settings() {

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Settings
        </h1>
        <p>Please enter your details</p>
      </section>

    </>
  )
}

export default Settings