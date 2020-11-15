import { Payload } from './payloadType'

export const addSomething = (payload: Payload )=>{
    return { type: 'ASYNC_ADD', payload};
}
export const generate = (payload: Payload) => {
    return { type: 'GENERATE', payload};
}
