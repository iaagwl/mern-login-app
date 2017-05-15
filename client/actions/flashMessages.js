import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './constants';

export function addFlashMassage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
