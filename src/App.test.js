import { fireEvent, getByDisplayValue, getByPlaceholderText, queryByPlaceholderText, render, wait, waitFor } from '@testing-library/react'
import { fetchShow as mockfetchShow } from './api/fetchShow'
import App from './App'

import React from 'react'
import Episodes from './components/Episodes'

jest.mock('./api/fetchShow')

test("api is called", async () => {
    mockfetchShow.mockResolvedValueOnce()
})

test("component renders", async () => {
    mockfetchShow.mockResolvedValueOnce()
    const app = <App/>
})

test("clicking on seasons makes vals populate", async () => {
    mockfetchShow.mockResolvedValueOnce()
    const app = <App/>
    const dropdown = getByDisplayValue(app,"Select a season")
    // console.log(dropdown)
})