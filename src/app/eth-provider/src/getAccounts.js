export default ({accounts}) =>
  new Promise((resolve, reject) =>
    accounts((error, accounts) =>
      error ?
        reject(error)
        : resolve(accounts)
    )
  )
