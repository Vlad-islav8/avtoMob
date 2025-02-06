import { createAction } from "@reduxjs/toolkit";
export const loadCars = createAction('LOAD-CARS')
export const SearhCars = createAction('SEARCH-CARS')
export const SearhUpdateText = createAction('SEARCH-UPDATE-TEXT')
export const filterCars = createAction('FILTER-CARS')

export const submitForm = createAction('SUBMIT_FORM');
export const resetForm = createAction('RESET_FORM');
export const setFormData = createAction('SET_FORM_DATA');
export const setFormErrors = createAction('SET_FORM_ERRORS');