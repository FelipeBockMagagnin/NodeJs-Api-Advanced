import { HttpRequest, HttpResponse } from './http'

export interface Controler {
  handle (httpRequest: HttpRequest): HttpResponse
}
