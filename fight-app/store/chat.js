export const state = () => {
  return {
    messages: [
      {
        name: "tanaka",
        message: "hello world!"
      },
      {
        name: "yamada",
        message: "hello world"
      },
      {
        name: "saito",
        message: "hello world!!!"
      }
    ]
  }
}

export const mutations = {
  ADD_MESSAGE(state,message){
    state.messages.unshift(message)
  }
}

export const actions = {
}
