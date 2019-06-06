import { UPDATE_FORM, SUBMIT_FORM, SUBMIT_FORM_SUCCESS } from './types'

export const updateForm = payload => ({
  type: UPDATE_FORM,
  payload
})

export const submitForm = payload => ({
  type: SUBMIT_FORM,
  payload
})

export const submitFormSuccess = payload => ({
  type: SUBMIT_FORM_SUCCESS,
  payload
})
